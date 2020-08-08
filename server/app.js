const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employee");

const app = express();

mongoose.connect('mongodb+srv://ashumantoo:' + process.env.MONGO_ATLAS_PW + '@firstcluster-1gkcp.mongodb.net/employeeApp?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to MongoDB Database');
    })
    .catch(err => {
        console.log(err);
    });
app.use("/employees", employeeRoutes);

app.listen(3000, () => {
    console.log("server is running!");
});