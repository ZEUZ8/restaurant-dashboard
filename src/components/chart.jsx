import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const generateRandomData = (numOfDays) => {
  const startDate = new Date(2022, 0, 1); // January 1, 2022
  const data = [];

  for (let i = 0; i < numOfDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const formattedDate = currentDate.toISOString().split("T")[0];
    const amount = Math.floor(Math.random() * 10000) + 1000;

    data.push({ amount, date: formattedDate });
  }

  return data;
};

const Chart = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [chartData, setChartData] = useState(generateRandomData(90)); // Data for more than 3 months

  const handleToggleChart = () => {
    setIsMonthly(!isMonthly);

    if (!isMonthly) {
      // If switching to Monthly, calculate monthly data based on daily data
      const monthlyData = calculateMonthlyData(chartData);
      setChartData(monthlyData);
    } else {
      // If switching to Daily, revert to the original daily data
      setChartData(generateRandomData(90));
    }
  };

  const calculateMonthlyData = (dailyData) => {
    // Logic to calculate monthly data from daily data
    const monthlyData = [];
    let currentMonth = "";
    let totalAmount = 0;

    dailyData.forEach((entry) => {
      const [year, month] = entry.date.split("-");
      const monthKey = `${year}-${month}`;

      if (monthKey !== currentMonth) {
        if (currentMonth !== "") {
          monthlyData.push({ amount: totalAmount, date: currentMonth });
        }

        currentMonth = monthKey;
        totalAmount = 0;
      }

      totalAmount += entry.amount;
    });

    // Add the last month's data
    monthlyData.push({ amount: totalAmount, date: currentMonth });

    return monthlyData;
  };

  const getTickFormat = (date) => {
    if (isMonthly) {
      const [year, month] = date.split("-");
      const monthString = new Date(`${year}-${month}-01`).toLocaleString(
        "default",
        { month: "short" }
      );
      return monthString;
    } else {
      return parseInt(date.split("-")[2], 10); // Show day number when daily
    }
  };

  return (<>
      <div className="sticky top-0 z-50 ">
        <div className="h-10 w-full text-center font-bold">
          {isMonthly ? "Monthly Data" : "Daily Data"}
        </div>
        <button onClick={handleToggleChart} className="w-full p-2">
          {isMonthly ? "Switch to Daily" : "Switch to Monthly"}
        </button>
      </div>
    <div style={{ width: "600px", height: "400px", overflowX: "auto" }}>
      <LineChart
        width={chartData.length * 40 < 600 ? 600 : chartData.length * 40}
        height={320}
        data={chartData}
        >
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <XAxis dataKey="date" stroke="#fff" tickFormatter={getTickFormat} />
        <YAxis dataKey="amount" stroke="#fff" domain={[0, 15000]} />
      </LineChart>
    </div>
          </>
  );
};

export default Chart;
