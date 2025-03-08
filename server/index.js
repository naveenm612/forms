const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')


// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());