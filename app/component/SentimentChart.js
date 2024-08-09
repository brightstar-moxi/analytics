// components/SentimentChart.js
import { Bar } from 'react-chartjs-2';

const SentimentChart = ({ data }) => {
  const chartData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: 'Sentiment Score',
        data: [data.positive, data.negative, data.neutral],
        backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default SentimentChart;
