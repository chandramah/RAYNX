import React, { useState } from "react";
import { addDepartment } from "../api";

const AddDepartmentForm = ({ closeForm }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDepartment({ name });
    closeForm();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Department</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="border p-2 w-full" placeholder="Department Name" value={name} onChange={e => setName(e.target.value)} required />
          <div className="flex justify-end space-x-2">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={closeForm}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartmentForm;
