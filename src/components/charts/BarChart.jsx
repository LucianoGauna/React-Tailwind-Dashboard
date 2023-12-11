import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { SALES_CHART } from '../../data/Data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: '',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 9,
      },
    },
    y: {
      border: { dash: [4, 4] },
      grid: {
        color: 'lightGrey',
        borderDash: [2, 3],
      },
    },
  },
};

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: SALES_CHART[0].year,
      data: SALES_CHART[0].data?.map(item => item.visits),
      backgroundColor: '#db2777',
    },
    {
      label: SALES_CHART[1].year,
      data: SALES_CHART[1].data?.map(item => item.visits),
      backgroundColor: '#6366f1',
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
