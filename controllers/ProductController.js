const ProductModel = require("../models/product");

class ProductController{
   static createProduct = async (req, res) => {
  try {
    const { name } = req.body;

    const data = await ProductModel.create({ name });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


    //get all product
   static getAllProducts = async(req,res)=>{
        try{
            const products = await ProductModel.find().sort({createdAt: -1});
            return res.status(200).json({success: true,data:products});
        }catch(error){
            console.log("Error fetching products:",error);
        }
    }

    // Get Single Product by ID
  static getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id);

      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found." });
      }

      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // Update Product by ID
  static updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        { name },
        { new: true, runValidators: true }
      );

      if (!updatedProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found." });
      }

      return res.status(200).json({
        success: true,
        message: "Product updated successfully.",
        data: updatedProduct,
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete Product by ID
  static deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductModel.findByIdAndDelete(id);

      if (!deletedProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found." });
      }

      return res.status(200).json({
        success: true,
        message: "Product deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  

}

module.exports = ProductController;