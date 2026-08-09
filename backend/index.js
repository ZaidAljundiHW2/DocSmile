const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;



app.listen(5000);