// server.js - Main entry point
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const erpRoutes = require('./routes/erpRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use('/api/auth', authRoutes);
app.use('/api/erp', erpRoutes);

const PORT = process.env.PORT || 5001;

const listEndpoints = require('express-list-endpoints');
console.log(listEndpoints(app));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
