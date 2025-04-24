"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create server
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
//Routes
app.use("/products", product_routes_1.default);
app.use('/', page_routes_1.default);
// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
mongoose_1.default
    .connect("mongodb+srv://mcvef2013:ucpBxBAmu3jsIZdM@clusterdatabase.k0zf4jf.mongodb.net/store?retryWrites=true&w=majority&appName=ClusterDatabase")
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
})
    .catch((err) => console.error('Failed to connect to MongoDB', err));
