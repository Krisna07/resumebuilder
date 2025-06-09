import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service'; // Adjust path if necessary
import { ErrorResponse } from '../utils/errResponse';
// Adjust path if necessary

const authService = new AuthService();

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return next(new ErrorResponse('Please provide username, email, and password', 400));
        }

        const user = await authService.registerUser({ username, email, password });

        // In a real app, you'd likely generate a JWT token here and send it back
        // For now, just sending back the user data (without password)
        res.status(201).json({
            success: true,
            data: user,
            // token: generateToken(user._id) // Example for later
        });
    } catch (error) {
        next(error); // Pass error to the global error handler
    }
};

// Add login, getMe controllers here later