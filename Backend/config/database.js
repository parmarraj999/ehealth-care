const mongoose = require('mongoose');

const MONGO_URL = "mongodb://localhost:27017"

mongoose.connect(MONGO_URL)
    .then(() =>
        console.log("connected to db")
    )
    .catch((error)=>{
        console.log(error)
    })

module.exports = mongoose;