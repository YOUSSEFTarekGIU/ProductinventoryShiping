import mongoose from 'mongoose';
const InventorySchema = mongoose.Schema(
  {
    Inventory_Location: {
      type: String,
      required: true,
    }, 
  },
  { timestamps: true }
);
const Inventory = mongoose.model('Inventory', ProductSchema);
export default Inventory;