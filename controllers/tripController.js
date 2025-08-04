import Trip from '../models/Trip.js';

export const createTrip = async (req, res) => {
  const trip = await Trip.create({ ...req.body, user: req.userId });
  res.status(201).json(trip);
};

export const getTrips = async (req, res) => {
  const trips = await Trip.find({ user: req.userId });
  res.json(trips);
};

export const updateTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const { from, to, date,vehicle } = req.body;

    const updatedTrip = await Trip.findOneAndUpdate(
      { _id: id, user: req.userId },  // only allow user to update their own entry
      { from, to, date,vehicle },
      { new: true }
    );

    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.json({ message: 'Trip updated', trip: updatedTrip });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update trip' });
  }
};
export const getTripById = async (req, res) => {
  try {
    const { id } = req.params;

    const trip = await Trip.findOne({ _id: id, user: req.userId });

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching trip' });
  }
};
