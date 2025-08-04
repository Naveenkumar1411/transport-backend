import mongoose from 'mongoose';

const dieselSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  vehicle: { type: String, required: true },  // <-- Add this
  date: { type: Date, required: true },
  bunkName: { type: String, required: true },
  km: { type: Number, required: true },
  rate: { type: Number, required: true },
  quantity: { type: Number, required: true }
});


export default mongoose.model('Diesel', dieselSchema);
