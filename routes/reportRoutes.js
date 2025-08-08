import express from 'express';
import { getReport } from '../controllers/reportController.js';
import { authenticate } from '../middleware/authMiddleware.js';
//import { generatePDFReport } from '../controllers/reportController.js';
const router = express.Router();

router.get('/pdf', authenticate, getReport);
export default router;
