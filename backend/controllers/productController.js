import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//desc    Fetch all products
//route   GET /api/products
//acess   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resurce not found");
  }
});
// @desc    Create product
// @route   POST /api/products/
// @access  Private
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "SAmpleCategory",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  });

  const createdProduct = await product.save();
  res.status(200).json(createProduct);
});

// @desc    Update product
// @route   Put /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  const { name, price, brand, description, image, category, countInStock } =
    req.body;

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updateProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
export { getProductById, getProducts, createProduct, updateProduct };
