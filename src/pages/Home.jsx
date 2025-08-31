import React, { useEffect, useState } from "react";
import { getEmployees, getDepartments } from "../api";

const Home = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const employees = await getEmployees();
    const departments = await getDepartments();
    setEmployeeCount(employees.length);
    setDepartmentCount(departments.length);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">Total Employees</h2>
        <p className="text-indigo-600 text-4xl mt-4">{employeeCount}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">Total Departments</h2>
        <p className="text-indigo-600 text-4xl mt-4">{departmentCount}</p>
      </div>
    </div>
  );
};

export default Home;
