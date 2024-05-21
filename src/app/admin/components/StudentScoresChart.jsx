import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const calculateScores = (inputList) => {
    const education = inputList.slice(0, 4).reduce((a, b) => a + b, 0) / 4;
    const pauses = inputList.slice(4, 8).reduce((a, b) => a + b, 0) / 4;
    const home = inputList.slice(8, 12).reduce((a, b) => a + b, 0) / 4;
    const overall = inputList.reduce((a, b) => a + b, 0) / inputList.length;
    return { education, pauses, home, overall };
};

const StudentScoresChart = ({ data, title, dates }) => {
    const scores = data.map(calculateScores);

    const chartData = {
        labels: dates,
        datasets: [
            {
                label: 'Undervisning',
                data: scores.map(score => score.education),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
            {
                label: 'Pauser',
                data: scores.map(score => score.pauses),
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: false,
            },
            {
                label: 'Hjemme',
                data: scores.map(score => score.home),
                borderColor: 'rgba(255, 159, 64, 1)',
                fill: false,
            },
            {
                label: 'Generelt',
                data: scores.map(score => score.overall),
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                min: 0,
                max: 110,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw.toFixed(1)}`;
                    }
                }
            },
            legend: {
                display: true,
            },
        },
    };

    return (
        <div>
            <div className="flex items-center justify-center font-bold">{title}</div>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default StudentScoresChart;
