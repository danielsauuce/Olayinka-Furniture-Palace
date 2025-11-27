import Redis from 'ioredis';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import logger from '../utils/logger.js';

let redisClient;
let rateLimiter;

try {
  redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

  redisClient.on('connect', () => {
    logger.info('Redis client connected successfully');
  });

  redisClient.on('error', (err) => {
    logger.error('Redis Client Error:', { error: err.message });
  });

  // DDos protection and rate limiting
  rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'middleware',
    points: 10, // Number of requests
    duration: 60, // Per 60 seconds
    blockDuration: 60, // Block for 60 seconds if exceeded
  });

  logger.info('Rate limiter initialized with Redis');
} catch (error) {
  logger.error('Failed to initialize Redis:', { error: error.message });
}

export default { redisClient, rateLimiter };
