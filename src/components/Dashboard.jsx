import React from "react";
import Donut from "./Donut";
import Top5 from "./Top5";
import Least5 from "./Least5";
import Chart from "./chart";
import Sales from "./Sales";

const Dashboard = () => {
  return (
    <>
      <div className="grid xl:grid-cols-10 text-white p-4 px-10">
        <div className="xl:col-span-6 grid w-full ">
          <Sales/>
        </div>
        <div className="xl:col-span-4 max-xl:my-8 grid ">
            <Chart />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 max-w-full min-h-full px-10 p-4 overflow-y-auto">
        <Donut />
        <Top5 />
        <Least5 />
      </div>
    </>
  );
};

export default Dashboard;
