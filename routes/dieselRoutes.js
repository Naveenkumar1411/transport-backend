import express from 'express';
import { createDiesel, getDieselEntries,updateDiesel,getDieselById } from '../controllers/dieselController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', authenticate, createDiesel);
router.get('/', authenticate, getDieselEntries);
router.put('/:id', authenticate, updateDiesel);
router.get('/:id', authenticate, getDieselById);
export default router;
