import Redis from 'ioredis';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import logger from '../utils/logger.js';

let redisClient;
let rateLimiter;

try {
  redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

  redisClient.on('connect', () => logger.info('Redis client connected successfully'));
  redisClient.on('error', (err) => logger.error('Redis Client Error:', { error: err.message }));

  rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'middleware',
    points: 10,
    duration: 60,
    blockDuration: 60,
  });

  logger.info('Rate limiter initialized with Redis');
} catch (error) {
  logger.error('Failed to initialize Redis:', { error: error.message });
}

// Export default object
export default { redisClient, rateLimiter };
