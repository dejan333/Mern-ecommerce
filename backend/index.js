import express from "express";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
connectDB();


app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
