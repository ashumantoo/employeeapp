const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    picture: {
        type: String
    },
    position: {
        type: String
    },
    salary: {
        type: String
    }
})

const employee = mongoose.model("employee", EmployeeSchema);
module.exports = employee;