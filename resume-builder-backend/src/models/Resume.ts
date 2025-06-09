import { Schema, model } from 'mongoose';

const resumeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    personalDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String }
    },
    experience: [{
        jobTitle: { type: String, required: true },
        company: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        description: { type: String }
    }],
    education: [{
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date }
    }],
    skills: [{ type: String }],
    certifications: [{ type: String }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Resume = model('Resume', resumeSchema);

export default Resume;