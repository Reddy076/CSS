const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database.js');
require('dotenv').config({ path: './backend/.env' });

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.get('/api/health', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
