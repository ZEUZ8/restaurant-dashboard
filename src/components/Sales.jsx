import React from "react";

const Sales = () => {
  return (
    <>
      <div className="grid gap-8">
        <div className="grid w-full max-sm:grid-cols-4 sm:grid-cols-10 gap-5">
          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px]">Today Sales</p>
            <p className="text-lg text-[#05FDF1]">
              365.95 <span className="text-xs text-white">AED</span>{" "}
            </p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem]">than yesterday</span>
            </p>
          </div>

          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px]">Today Sales</p>
            <p className="text-lg text-[#FFD400]">
              365.95 <span className="text-xs text-white">AED</span>{" "}
            </p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem]">Top Sale Time</span>
            </p>
          </div>
          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px]">Today Sales</p>
            <p className="text-lg text-[#FF8006]">
              365.95 <span className="text-xs text-white">AED</span>{" "}
            </p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem]">Door Delivery Sales</span>
            </p>
          </div>
          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px] ">Today Sales</p>
            <p className="text-lg text-[#FF005A]">11/25</p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem] ">Bill & Pays</span>
            </p>
          </div>
          <div className="col-span-2 rounded-lg p-4 shadow-special">
            <p className="text-[8px] ">Today Sales</p>
            <p className="text-lg text-[#009FFF]">0/0</p>
            <p className="text-[.65rem] text-center">
              8% <span className="text-[0.4rem]">Void</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {/* graph mini start */}
          <div className="p-2 grid">
            <div className="text-white shadow-special rounded-2xl p-5">
              <h1 className="font-medium">Sales With Comparison</h1>
              <div className="flex flex-col ps-4">
                <div className="grid grid-cols-8 items-center mt-2">
                  <div className="text-base col-span-1">dining</div>
                  <div className="col-span-6  flex items-center max-w-full">
                    <div
                      className={`h-3 mx-5  rounded-xs w-[70%] bg-[#8639BA]`}
                    />
                    <p className="font-extralight">30%</p>
                  </div>
                </div>
                <div className="grid grid-cols-8 items-center mt-2">
                  <div className="text-base col-span-1">dining</div>
                  <div className="col-span-6  flex items-center max-w-full">
                    <div className={`h-3 mx-5  w-[60%] bg-[#AE45C6]`} />
                    <p className="font-extralight">30%</p>
                  </div>
                </div>
                <div className="grid grid-cols-8 items-center mt-2">
                  <div className="text-base col-span-1">dining</div>
                  <div className="col-span-6  flex items-center max-w-full">
                    <div className={`h-3 mx-5  w-[7%] bg-[#E958A1]`} />
                    <p className="font-extralight">30%</p>
                  </div>
                </div>
                <div className="grid grid-cols-8 items-center mt-2">
                  <div className="text-base col-span-1">dining</div>
                  <div className="col-span-6  flex items-center max-w-full">
                    <div className={`h-3 mx-5  w-[40%] bg-[#E8E465]`} />
                    <p className="font-extralight">30%</p>
                  </div>
                </div>
                <div className="grid grid-cols-8 items-center mt-2">
                  <div className="text-base col-span-1">dining</div>
                  <div className="col-span-6  flex items-center max-w-full">
                    <div className={`h-3 mx-5  w-[40%] bg-[#F2B45C]`} />
                    <p className="font-extralight">30%</p>
                  </div>
                </div>
                <div className="grid grid-cols-8 items-center mt-2">
                  <div className="text-base col-span-1">dining</div>
                  <div className="col-span-6  flex items-center max-w-full">
                    <div className={`h-3 mx-5  w-[40%] bg-[#EF7075]`} />
                    <p className="font-extralight">30%</p>
                  </div>
                </div>
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
                <p className="text-lg">
                  322.61 <span className="text-[.8rem]">AED</span>
                </p>
              </div>
              <div className=" p-2">
                <p>cash/23</p>
                <p>
                  322.61 <span className="text-[.8rem]">AED</span>
                </p>
              </div>
            </div>
            {/* end c */}
            {/* start abc */}
            <div className="p-4 grid gap-4 shadow-special rounded-lg">
              <p className="sm p-2">Total purchase</p>
              <div className="p-2">
                <p className="text-xs">cash/23</p>
                <p className="text-lg">
                  322.61 <span className="text-[.8rem]">AED</span>
                </p>
              </div>
              <div className=" p-2">
                <p>cash/23</p>
                <p>
                  322.61 <span className="text-[.8rem]">AED</span>
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
