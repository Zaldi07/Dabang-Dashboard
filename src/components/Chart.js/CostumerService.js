import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const randomData = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 5000));

const randomData2 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 5000));

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: randomData,
      borderColor: "rgba(5, 194, 131, 1)",
      backgroundColor: "rgba(5, 194, 131, 0.5)",
    },
    {
      fill: true,
      label: "Dataset 2",
      data: randomData2,
      borderColor: "rgba(0, 125, 214, 1)",
      backgroundColor: "rgba(0, 125, 214, 0.5)",
    },
  ],
};

export function Customer() {
  return (
    <div className="chart-container">
      <Line options={options} data={data} />
         
    </div>
  );
}
