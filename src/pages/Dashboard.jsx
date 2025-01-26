import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Dashboard = () => {
  const data = {
    labels: ["Health Department", "Education Department", "Finance Department", "food department"],
    datasets: [
      {
        label: "Visitors",
        data: [50, 75, 100, 80],
        backgroundColor: ["#4F46E5", "#6366F1", "#A5B4FC","#4F46E5"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Department-Wise Visitors" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h1> <span>(Admin panel)</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-medium text-gray-600">New Visitors</h2>
          <p className="text-2xl font-bold text-indigo-500">123</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-medium text-gray-600">Returning Visitors</h2>
          <p className="text-2xl font-bold text-indigo-500">45</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-medium text-gray-600">Total Departments</h2>
          <p className="text-2xl font-bold text-indigo-500">5</p>
        </div>
      </div>
      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
