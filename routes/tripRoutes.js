import express from 'express';
import { createTrip, getTrips,updateTrip,getTripById } from '../controllers/tripController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', authenticate, createTrip);
router.get('/', authenticate, getTrips);
router.get('/:id', authenticate, getTripById);
router.put('/:id', authenticate, updateTrip);
export default router;
