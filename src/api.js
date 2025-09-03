import axios from "axios";

// Use CloudFront distribution domain
const BASE_URL = "https://d1u8wzc5hp6lk8.cloudfront.net/api";

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
