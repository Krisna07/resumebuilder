import mongoose from 'mongoose';// Assuming config.DB_URI holds your connection string
import config from '../config';

const connectDB = async () => {
    try {
        const mongoURI = config.DB_URI || 'mongodb://localhost:27017/resume-builder'; // Default to local MongoDB if not set
        // Log the connection string for debugging purposes
        console.log('Connecting to MongoDB...:', mongoURI);
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err: any) {
        console.error('MongoDB Connection Error:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;