export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Resume {
    id: string;
    userId: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface JobDescription {
    title: string;
    company: string;
    location: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface ResumeCreationInput {
    title: string;
    content: string;
}

export interface ResumeUpdateInput {
    id: string;
    title?: string;
    content?: string;
}