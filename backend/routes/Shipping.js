import express from 'express';
import Shipping from '../models/Shipping.js';

const router = express.Router();

//ONE Shipping
router.get('/find/:id', async (req, res) => {
  try {
    const Shipping = await Shipping.findById(req.params.id);
    res.status(200).json(Shipping);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;