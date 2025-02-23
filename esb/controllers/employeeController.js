const axios = require("axios");

const EMPLOYEE_SERVICE_URL = "http://127.0.0.1:8000/employees"; // FastAPI endpoint

// ✅ Create Employee
const createEmployee = async (req, res) => {
  try {
    const response = await axios.post(EMPLOYEE_SERVICE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

// ✅ Get All Employees
const getEmployees = async (req, res) => {
  try {
    const response = await axios.get(EMPLOYEE_SERVICE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

// ✅ Get Employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const response = await axios.get(`${EMPLOYEE_SERVICE_URL}/${employeeId}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

// ✅ Update Employee
const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const response = await axios.put(`${EMPLOYEE_SERVICE_URL}/${employeeId}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

// ✅ Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    await axios.delete(`${EMPLOYEE_SERVICE_URL}/${employeeId}`);
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
