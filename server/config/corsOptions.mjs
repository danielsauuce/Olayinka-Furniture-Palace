const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173', 
  credentials: true, // allow cookies
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions
