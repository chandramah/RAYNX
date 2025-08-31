import React, { useEffect, useState } from "react";
import { getDepartments, deleteDepartment } from "../api";
import AddDepartmentForm from "./AddDepartmentForm";

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data);
  };

  const handleDelete = async (id) => {
    await deleteDepartment(id);
    fetchDepartments();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Departments</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(true)}
        >
          Add Department
        </button>
      </div>
      {showForm && <AddDepartmentForm closeForm={() => { setShowForm(false); fetchDepartments(); }} />}
      <table className="w-full border">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(dept => (
            <tr key={dept.id} className="border-t">
              <td className="p-2">{dept.id}</td>
              <td className="p-2">{dept.name}</td>
              <td className="p-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(dept.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
