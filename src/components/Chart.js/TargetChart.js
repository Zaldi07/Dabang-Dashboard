import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const randomData = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 15000));
const randomData2 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 15000));

export const data = {
  labels,
  datasets: [
    {
      label: "Reality",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: randomData,
      backgroundColor: "rgba(74, 181, 142, 1)",
    },
    {
      label: "Target",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: randomData2,
      backgroundColor: "rgba(255, 207, 0, 1)",
    },
  ],
};

export function TargetChart() {
  return <Bar options={options} data={data} />;
}
