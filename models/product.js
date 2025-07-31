const mongoose = require('mongoose');

// Define schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  {
    timestamps: true, // ✅ Correct spelling
  }
);

// Create model
const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;
