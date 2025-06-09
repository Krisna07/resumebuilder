import { Router } from 'express';
import { register } from '../controller/auth.controller';
import getJobDetails from '../utils/getJobDetails';
// import resumeRoutes from './resume.routes'; // Example for other routes

const router = Router();
console.log('Initializing routes...');


// router.use('/register', register);
router.use('/getData', async (req, res) => {
    console.log('Received request to get job details');
    const url = req.query.url as string;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const details = await getJobDetails(url)
    console.log(details);
    res.status(200).json({ data: details });

});
// router.use('/resumes', resumeRoutes);

export default router;