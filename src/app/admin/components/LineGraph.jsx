"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineGraph = ({ data }) => {
    const chartData = {
        labels: data.map(point => point.x),
        datasets: [
            {
                label: 'Line Graph',
                data: data.map(point => point.y),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X Axis Label'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis Label'
                }
            },
            maintainAspectRatio: false
        }
    };

    return <Line data={chartData} options={options} />;
};

export default LineGraph;
