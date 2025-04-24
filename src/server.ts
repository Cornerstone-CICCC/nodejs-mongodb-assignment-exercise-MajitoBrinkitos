import express from 'express';
import productRoutes from "./routes/product.routes";
import pageRouter from './routes/page.routes';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express();

// Middleware
app.use(express.json());

//Routes
app.use("/products", productRoutes);
app.use('/', pageRouter)

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
mongoose
  .connect("mongodb+srv://mcvef2013:ucpBxBAmu3jsIZdM@clusterdatabase.k0zf4jf.mongodb.net/store?retryWrites=true&w=majority&appName=ClusterDatabase")
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));