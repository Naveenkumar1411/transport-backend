import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  vehicle: { type: String, required: true },  // <-- Add this if not already present
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: Date, required: true }
});

export default mongoose.model('Trip', tripSchema);
