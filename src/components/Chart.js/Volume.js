import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  plugins: {},
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["", "", "", "", "", ""];

const randomData = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000));

const randomData2 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000));

export const data = {
  labels,
  datasets: [
    {
      label: "Services",
      data: randomData,
      backgroundColor: "rgba(0, 224, 150, 1)",
    },
    {
      label: "Volume",
      data: randomData2,
      backgroundColor: "rgba(0, 149, 255, 1)",
    },
  ],
};

export function Volume() {
  return <Bar options={options} data={data} />;
}
