const Employee = require('../models/employee');

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        if (!employees)
            res.status(404).json({ message: "No Employees Found" });
        else if (employees.length)
            res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.getEmployee = async (req, res) => {
    const empId = req.params.empId;
    try {
        const employee = await Employee.findOne({ _id: empId });
        if (!employee) {
            res.status(404).json({ message: "Employee Not Found", success: false });
        } else {
            res.status(200).json(employee);
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}

exports.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        position: req.body.position,
        salary: req.body.salary
    });
    try {
        const result = await employee.save();
        if (result)
            res.status(201).json({ employee: result, success: true });
        else
            throw new Error("Error while creating employee");
    } catch (error) {
        res.status(500).json({ error: error });
    }

}

exports.updateEmployee = async (req, res) => {
    const empId = req.params.empId;
    try {
        const employee = await Employee.findOne({ _id: empId });
        if (!employee) {
            res.status(404).json({ message: "Employee Not Found", success: false });
        } else {
            const emplyeeDataToUpdate = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                picture: req.body.picture,
                position: req.body.position,
                salary: req.body.salary
            }
            const result = await Employee.findOneAndUpdate({ _id: empId }, { $set: emplyeeDataToUpdate });
            if (result) {
                res.status(200).json({ message: "Employee Updated ", success: true });
            } else
                throw new Error("Error while creating employee");
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.removeEmployee = async (req, res) => {
    const empId = req.params.empId;
    try {
        const employee = await Employee.findOne({ _id: empId });
        if (!employee) {
            res.status(404).json({ message: "Employee Not Found", success: false });
        }
        const result = await Employee.findOneAndDelete({ _id: empId });
        if (result) {
            res.status(200).json({ message: "Employee Deleted ", success: true });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}