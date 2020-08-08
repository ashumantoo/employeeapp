const express = require('express');
const routes = express.Router();
const employeeController = require("../controllers/employee");

routes.get("/", employeeController.getEmployees);
routes.post('/', employeeController.createEmployee);
routes.get("/:empId", employeeController.getEmployee);
routes.put("/:empId", employeeController.updateEmployee);
routes.delete("/:empId", employeeController.removeEmployee);

module.exports = routes;