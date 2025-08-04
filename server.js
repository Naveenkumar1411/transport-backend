import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import tripRoutes from './routes/tripRoutes.js';
import dieselRoutes from './routes/dieselRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/diesel', dieselRoutes);
app.use('/api/report', reportRoutes);
app.listen(process.env.PORT || 5000, () => console.log("Server running"));
