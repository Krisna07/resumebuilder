import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    DB_URI: process.env.DATABASE_URL || 'mongodb://localhost:27017/resume-builder',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    AI_API_KEY: process.env.AI_API_KEY || 'your_ai_api_key',
};

export default config;