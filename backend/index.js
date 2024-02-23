import express from "express";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(cookieParser());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use('/api/orders', orderRoutes)

app.use('/api/config/paypal', (req,res) => {
  res.send({clientId: process.env.PAYPAL_CLIENT_ID })
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
