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

  return (
    <>
      <div className="sticky top-0 z-50 grid grid-cols-6 gap-4">
        <div className="h-10 w-full text-end text-xl font-bold p-2 col-span-4">
          {isMonthly ? "Month wise Comparison" : "Day wise Comparison"}
        </div>
        <button
          onClick={handleToggleChart}
          className="w-full  col-span-2 flex gap-2  "
        >
          <p
            className={` ${
              !isMonthly && `bg-white text-black `
            } font-medium rounded-xl p-2`}
          >
            {" "}
            Daily
          </p>
          <p
            className={`${
              isMonthly && `bg-white text-black`
            } font-medium rounded-xl p-2`}
          >
            Monthly
          </p>
        </button>
      </div>
      <div style={{ width: "600px", height: "400px", overflowX: "auto" }}>
        <LineChart
          width={chartData.length * 40 < 600 ? 600 : chartData.length * 40}
          height={320}
          data={chartData}
        >
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="25%" stopColor="#05FF00" />
              <stop offset="50%" stopColor="#DC8D00" />
              <stop offset="75%" stopColor="#FF7A00" />
              <stop offset="85%" stopColor="#FF0202" />
              <stop offset="100%" stopColor="#05FF00" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="amount"
            stroke="url(#colorUv)" // Apply the gradient to the line
            strokeWidth={3}
            dot={false}
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickFormatter={getTickFormat}
          />
          <YAxis dataKey="amount" axisLine={false} domain={[0, 15000]} />
        </LineChart>
      </div>
    </>
  );
};

export default Chart;
