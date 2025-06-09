import express from 'express';
import { json, urlencoded } from 'body-parser';
import router from './routes/index';
import connectDB from './services/dbconnect';
import { errorHandler } from './middleware/errorHandler';
import cors from 'cors';
const app = express();

// Middleware
app.use(json());
app.use(cors)
app.use(urlencoded({ extended: true }));

// Connect to the database
// connectDatabase();
// connectDB();

// Routes
app.use('/api', router)


// Error handling middleware
// app.use(errorHandler);

export default app;