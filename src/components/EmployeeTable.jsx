import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api";
import AddEmployeeForm from "./AddEmployeeForm";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Employees</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(true)}
        >
          Add Employee
        </button>
      </div>
      {showForm && <AddEmployeeForm closeForm={() => { setShowForm(false); fetchEmployees(); }} />}
      <table className="w-full border">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Department</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} className="border-t">
              <td className="p-2">{emp.id}</td>
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.email}</td>
              <td className="p-2">{emp.departmentName}</td>
              <td className="p-2 space-x-2">
                {/* Edit can be implemented similarly */}
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
