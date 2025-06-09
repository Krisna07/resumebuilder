import express from 'express';
import { createServer } from 'http';
import app from './app';
import config from './config';

const PORT = config.PORT || 3000;

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});