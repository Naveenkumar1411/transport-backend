import Trip from '../models/Trip.js';
import Diesel from '../models/Diesel.js';

export const getReport = async (req, res) => {
  try {
    const { from, to, vehicle } = req.query;

    if (!from || !to || !vehicle) {
      return res.status(400).json({ message: 'Missing from, to, or vehicle query' });
    }

    const fromDate = new Date(from);
    const toDate = new Date(to);

    // Get TRIPS
    const trips = await Trip.find({
      user: req.userId,
      vehicle,
      date: { $gte: fromDate, $lte: toDate }
    }).sort({ date: 1 });

    // Get DIESEL
    const diesel = await Diesel.find({
      user: req.userId,
      vehicle,
      date: { $gte: fromDate, $lte: toDate }
    }).sort({ date: 1 });

    res.json({
      vehicle,
      from,
      to,
      trips,
      diesel
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to generate report' });
  }
};
