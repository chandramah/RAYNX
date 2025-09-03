import axios from "axios";

// Quick test: use EC2 Public DNS for backend (HTTP for demo purposes)
const BASE_URL = "http://ec2-3-108-76-92.ap-south-1.compute.amazonaws.com:8080/api";

// Employees API
export const getEmployees = async () => {
  const res = await axios.get(`${BASE_URL}/employees`);
  return res.data;
};

export const addEmployee = async (employee) => {
  const res = await axios.post(`${BASE_URL}/employees`, employee);
  return res.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${BASE_URL}/employees/${id}`);
};

export const updateEmployee = async (id, employee) => {
  const res = await axios.put(`${BASE_URL}/employees/${id}`, employee);
  return res.data;
};

// Departments API
export const getDepartments = async () => {
  const res = await axios.get(`${BASE_URL}/departments`);
  return res.data;
};

export const addDepartment = async (dept) => {
  const res = await axios.post(`${BASE_URL}/departments`, dept);
  return res.data;
};

export const deleteDepartment = async (id) => {
  await axios.delete(`${BASE_URL}/departments/${id}`);
};
