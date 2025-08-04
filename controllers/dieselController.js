import Diesel from '../models/Diesel.js';

export const createDiesel = async (req, res) => {
  const diesel = await Diesel.create({ ...req.body, user: req.userId });
  res.status(201).json(diesel);
};

export const getDieselEntries = async (req, res) => {
  const entries = await Diesel.find({ user: req.userId });
  res.json(entries);
};

export const updateDiesel = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, bunkName, km, rate, quantity,vehicle } = req.body;

    const updatedDiesel = await Diesel.findOneAndUpdate(
      { _id: id, user: req.userId }, // ensure user owns the entry
      { date, bunkName, km, rate, quantity,vehicle },
      { new: true }
    );

    if (!updatedDiesel) {
      return res.status(404).json({ message: 'Diesel entry not found' });
    }

    res.json({ message: 'Diesel entry updated', diesel: updatedDiesel });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update diesel entry' });
  }
};

export const getDieselById = async (req, res) => {
  try {
    const { id } = req.params;

    const diesel = await Diesel.findOne({ _id: id, user: req.userId });

    if (!diesel) {
      return res.status(404).json({ message: 'Diesel entry not found' });
    }

    res.json(diesel);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching diesel entry' });
  }
};
