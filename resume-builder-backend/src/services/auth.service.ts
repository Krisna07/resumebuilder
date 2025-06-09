
import User, { IUser } from '../models/User'; // Adjust path if necessary // You might need to create this utility

import { ErrorResponse } from '../utils/errResponse';

interface UserRegistrationData {
    username: string;
    email: string;
    password?: string;
}

export class AuthService {
    public async registerUser(userData: UserRegistrationData): Promise<IUser> {
        const { username, email, password } = userData;

        // Check if user already exists
        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            throw new ErrorResponse('User with this email already exists', 400);
        }

        const existingUserByUsername = await User.findOne({ username });
        if (existingUserByUsername) {
            throw new ErrorResponse('User with this username already exists', 400);
        }

        if (!password) {
            throw new ErrorResponse('Password is required', 400);
        }

        // Create new user
        const user = new User({
            username,
            email,
            password,
        });

        await user.save();
        return user; // Mongoose toJSON transform will remove password
    }

    // Add loginUser, validateToken methods here later
}