import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Fiday", "Saturday", "Sunday"];

const randomData = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 25));
const randomData2 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 25));

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: randomData,
      backgroundColor: "rgba(0, 149, 255, 1)",
    },
    {
      label: "Dataset 2",
      data: randomData2,
      backgroundColor: "rgba(0, 224, 150, 1)",
    },
  ],
};

export function Total() {
  return <Bar options={options} data={data} />;
}
