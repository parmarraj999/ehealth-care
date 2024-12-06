const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/user');

const mongoose = require('./config/database')

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/', userRoutes);

app.listen(5000, () => {
    console.log("sever is running on port 5000")
})