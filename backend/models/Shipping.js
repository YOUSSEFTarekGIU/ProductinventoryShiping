import mongoose from 'mongoose';
const ShippingSchema = mongoose.Schema(
  {
    ShippingStatus: {
        type: Array
        [0] = "Created"
        [1] = "Shipped"
        [2] = "Delivered"
        [3] = "Returned"

    },
    
  },
  { timestamps: true }
);
const Product = mongoose.model('Shipping', ShippingSchema);
export default Shipping;