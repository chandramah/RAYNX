import React, { useState, useEffect } from "react";
import { addEmployee, getDepartments } from "../api";

const AddEmployeeForm = ({ closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee({ name, email, departmentId });
    closeForm();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="border p-2 w-full" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input className="border p-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <select className="border p-2 w-full" value={departmentId} onChange={e => setDepartmentId(e.target.value)} required>
            <option value="">Select Department</option>
            {departments.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
          <div className="flex justify-end space-x-2">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={closeForm}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
