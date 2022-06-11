import express from 'express';
import Inventory from '../models/Inventory.js';
import Inventory from '../models/Inventory.js';

const router = express.Router();

//ONE Inventory
router.get('/find/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//ALLL Inventory
router.get('/', async (req, res, next) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let inventory;

    if (qNew) {
      inventory = await Inventory.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      inventory = await Inventory.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      inventory = await Inventory.find();
    }

    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;