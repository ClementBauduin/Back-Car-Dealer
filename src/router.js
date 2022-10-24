import express from 'express';
import readCarRoute from './routes/readCarsRoute.js';

const router = express.Router();

router.get("/api/v1",readCarRoute)

export default router;