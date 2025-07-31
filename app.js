const express = require('express');
const app = express();

const connectdb = require('./database/connectdb');
const web = require("./routes/web");

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const fileUpload = require("express-fileupload");
app.use(fileUpload({ useTempFiles: true }));


dotenv.config();

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectdb();

// Mount API routes at /api
app.use("/api", web);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
