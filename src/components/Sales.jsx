import React, { useEffect, useState } from "react";
import SaleWithCompare from "./SaleWithCompare";
import axios from "axios";

const Sales = () => {
  const [data,setData] = useState([])
  const [maxPrice, setMaxPrice] = useState(0);

  const fetchData = async()=>{
      try{
          const response = await axios.get("http://localhost:3000/sales")
          const result = response?.data?.sort((a,b)=>b.profit - a.profit)
          setMaxPrice(result[0].profit);
          setData(result)
      }catch(error){
          console.log(error,' erro in the sale with compare fetching')
      }
  }

  useEffect(()=>{
      fetchData()
  },[])
  return (
    <>
      <div className="grid gap-8">
        <div className="grid w-full max-sm:grid-cols-4 sm:grid-cols-10 gap-5">
          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px]">Today Sales</p>
            <p className="text-lg text-[#05FDF1]">
              365.95 <span className="text-xs text-white">AED</span>{" "}
            </p>
            <p className="text-[.65rem] text-center text-green-400">
              8% <span className="text-[0.4rem] ">than yesterday</span>
            </p>
          </div>

          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px]">Top sale time</p>
            <p className="text-lg text-[#FFD400]">
              365.95 <span className="text-xs text-white">AED</span>{" "}
            </p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem]">12 pm - 3 pm</span>
            </p>
          </div>

          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px]">Door Delivery Sales</p>
            <p className="text-lg text-[#FF8006]">
              365.95 <span className="text-xs text-white">AED</span>{" "}
            </p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem]">Bills 08</span>
            </p>
          </div>

          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px] ">Bill & Payss</p>
            <p className="text-lg text-[#FF005A]">11/25</p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem] "></span>
            </p>
          </div>

          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px] ">Void</p>
            <p className="text-lg text-[#009FFF]">0/0</p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem]">Bills/items</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {/* graph mini start */}

          <div className="p-2 grid">
            <div className="text-white shadow-special rounded-2xl p-5">
              <h1 className="font-medium">Sales With Comparison</h1>
              <div className="flex flex-col ps-4">
              
                {data.map((data,i)=>{
                  return <SaleWithCompare data={data} maxPrice={maxPrice} i={i}/>
                })}
              </div>
            </div>
          </div>

          {/* graph mini start */}
          <div className="p-2 grid gap-4 grid-cols-2">
            {/* start c */}
            <div className="p-4  grid gap-4 shadow-special rounded-lg">
              <p className="sm p-2">Total purchase</p>
              <div className="p-2">
                <p className="text-xs">cash/23</p>
                <p className="text-lg text-[#8639BA]">
                  322.61 <span className="text-[.8rem] text-white">AED</span>
                </p>
              </div>
              <div className=" p-2">
                <p>cash/23</p>
                <p className="text-[#8639BA]">
                  322.61 <span className="text-[.8rem] text-white">AED</span>
                </p>
              </div>
            </div>
            {/* end c */}
            {/* start abc */}
            <div className="p-4 grid gap-4 shadow-special rounded-lg">
              <p className="sm p-2">Total purchase</p>
              <div className="p-2">
                <p className="text-xs">cash/23</p>
                <p className="text-lg text-[#EF7075]">
                  322.61 <span className="text-[.8rem] text-white">AED</span>
                </p>
              </div>
              <div className=" p-2">
                <p>cash/23</p>
                <p className="text-[#F2B45C]">
                  322.61 <span className="text-[.8rem] text-white">AED</span>
                </p>
              </div>
            </div>
            {/* end abc */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
