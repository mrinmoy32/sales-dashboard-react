import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./SalesVsInvestmentTrend.css";
import "chartjs-adapter-date-fns";

function SalesVsInvestmentTrend({ data }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    if (chartRef.current && data) {
      if (chartInstanceRef.current) {
        // If a chart instance already exists, destroy it before creating a new one
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance
      const labels = data.map((item) => item.Date);
      const salesData = data.map((item) => parseFloat(item.Total_Sales));
      const investmentData = data.map((item) =>
        parseFloat(item.Total_Investment)
      );

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: "Total Sales",
            data: salesData,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            yAxisID: "sales-axis",
          },
          {
            label: "Total Investment",
            data: investmentData,
            borderColor: "rgba(255, 99, 132, 1)",
            tension: 0.1,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            yAxisID: "investment-axis",
          },
        ],
      };

      const config = {
        type: "line",
        data: chartData,
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "month", // Display data points by month
              },
            },
            y: {
              beginAtZero: true,
            },
            "sales-axis": {
              position: "left",
              title: {
                display: true,
                text: "Total Sales",
              },
            },
            "investment-axis": {
              position: "right",
              title: {
                display: true,
                text: "Total Investment",
              },
            },
          },
        },
      };

      const chartInstance = new Chart(chartRef.current, config);
      chartInstanceRef.current = chartInstance;
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default SalesVsInvestmentTrend;
