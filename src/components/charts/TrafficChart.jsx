import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TRAFFIC_CHART } from '../../data/Data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      labels: {
        color: 'gray',
      },
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
        color: 'gray',
        maxTicksLimit: 9,
      },
    },
    y: {
      border: { dash: [4, 4] },
      grid: {
        color: 'lightGrey',
      },
      ticks: {
        color: 'gray',
        maxTicksLimit: 8,
      },
    },
  },
};

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels: labels.map(item => item),
  datasets: [
    {
      label: TRAFFIC_CHART[0].year,
      data: TRAFFIC_CHART[0].data?.map(item => item.visits),
      borderColor: 'black',
      backgroundColor: 'black',
      tension: 0.5,
      pointRadius: 5,
    },
    {
      label: TRAFFIC_CHART[1].year,
      data: TRAFFIC_CHART[1].data?.map(item => item.visits),
      borderColor: '#0e8039',
      backgroundColor: '#0e8039',
      tension: 0.5,
      pointRadius: 5,
    },
  ],
};

const TrafficChart = () => {
  return <Line options={options} data={data} />;
};

export default TrafficChart;
