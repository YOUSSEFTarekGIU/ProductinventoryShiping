import mongoose from 'mongoose';
const ProductSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    }, 
    Unit: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
  
    InStock: {
      type: Boolean   ,
      required: true,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model('Product', ProductSchema);
export default Product;