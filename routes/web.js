const express = require("express");
const route = express.Router();
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/usercontroller");
const auth = require("../middlewares/auth");
const CourseController = require("../controllers/CourseController");

// Create Product
route.post("/createproduct", ProductController.createProduct);

// Get All Products
route.get("/products", ProductController.getAllProducts);

// Get Single Product by ID
route.get("/products/:id", ProductController.getProductById);

// Update Product by ID
route.put("/products/:id", ProductController.updateProduct);

// Delete Product by ID
route.delete("/products/:id", ProductController.deleteProduct);




route.post("/register", UserController.register);
route.post("/login", UserController.login);
route.post("/logout", UserController.logout);
route.get("/me", auth, UserController.getProfile);


//course
route.post('/addCourse', CourseController.createCourse);
route.get('/course', CourseController.getAllCourses);
route.get('/courseView/:id', CourseController.getCourseById);
route.put('/courseupdate/:id', CourseController.updateCourse);
route.delete('/coursedelete/:id', CourseController.deleteCourse);


module.exports = route;
            