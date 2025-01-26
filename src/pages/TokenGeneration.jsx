import React, { useState } from "react";
import axios from "axios";

const TokenGeneration = () => {
  const [beneficiaryId, setBeneficiaryId] = useState("");
  const [department, setDepartment] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if you're in production or development environment
    const apiUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://backend-practice-one.vercel.app/api/tokens/create-token'
        : 'http://localhost:5000/api/tokens/create-token';

    try {
      const res = await axios.post(apiUrl, {
        beneficiaryId,
        department,
        purpose,
      });
      alert(`Token Created: ${res.data.tokenId}`);
    } catch (error) {
      alert("Error creating token");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Generate Token</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Beneficiary ID</label>
            <input
              type="text"
              value={beneficiaryId}
              onChange={(e) => setBeneficiaryId(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter Beneficiary ID"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Department</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter Department"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Purpose</label>
            <input
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter Purpose"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
          >
            Generate Token
          </button>
        </form>
      </div>
    </div>
  );
};

export default TokenGeneration;
