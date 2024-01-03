import React, { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import navContent from "../assets/navContent.png";
import Group from "../assets/Group.png"
import lightIcon from "../assets/lightIcon.png"

const Navbar = () => {
  const [hover, setHover] = useState("");
  const [sideBar, setSideBar] = useState(false);
  console.groupEnd(hover);
  const handleClick = (target) => {
    setHover(target);
  };
  return (
    <>
      <nav class=" w-full  top-0 start-0 ">
        <div class="max-w-screen-xl flex  items-center justify-between mx-10 p-4">

          <div className="order-3 max-md:hidden">
            <img src={navContent} alt="" />
          </div>

          <div className="order-3 md:hidden flex gap-5 ">
            <img src={Group} alt="" />
            <img src={lightIcon} alt="" />
          </div>

          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>

          <div
            class="items-center flex justify-between  w-full  md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <div className="flex items-center">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden   dark:text-gray-400 dark:hover:bg-gray-700  ${
                  sideBar &&
                  "ring-2 ring-gray-200 bg-gray-100 focus:outline-none dark:ring-gray-600"
                }`}
                aria-controls="navbar-sticky"
                onClick={() => setSideBar(!sideBar)}
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <img src={leftArrow} className="max-xl:hidden" alt="pointer" />
              <h1 className="text-white text-2xl inline mx-5 mr-10 w-full">
                Branch Name
              </h1>
            </div>

            <ul class=" flex-col p-4 md:p-0 mt-4  hidden  xl:flex border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:border-0  ">
              <li>
                <a
                  onClick={() => handleClick("dashboard")}
                  class={`block py-2 px-2 text-black  ${
                    hover === "dashboard"
                      ? `bg-white`
                      : `bg-transparent text-white`
                  } rounded-lg p-5 cursor-pointer`}
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("sales")}
                  class={`block py-2 px-2 text-black  ${
                    hover === "sales" ? `bg-white` : `bg-transparent text-white`
                  } rounded-lg p-5 cursor-pointer`}
                  aria-current="page"
                >
                  Sales
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("payment")}
                  class={`block py-2 px-2 text-black  ${
                    hover === "payment"
                      ? `bg-white`
                      : `bg-transparent text-white`
                  } rounded-lg p-5 cursor-pointer`}
                  aria-current="page"
                >
                  Payment
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("Tax")}
                  class={`block py-2 px-2 text-black  ${
                    hover === "Tax" ? `bg-white` : `bg-transparent text-white`
                  } rounded-lg p-5 cursor-pointer`}
                  aria-current="page"
                >
                  Tax
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("MIS")}
                  class={`block py-2 px-2 text-black  ${
                    hover === "MIS" ? `bg-white` : `bg-transparent text-white`
                  } rounded-lg p-5 cursor-pointer`}
                  aria-current="page"
                >
                  MIS
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("purchase-entry")}
                  class={`block py-2 px-2 text-black  ${
                    hover === "purchase-entry"
                      ? `bg-white`
                      : `bg-transparent text-white`
                  } rounded-lg p-5 cursor-pointer`}
                  aria-current="page"
                >
                  Purchase entry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <button
        type="button"
        id="triggerEl"
        aria-expanded="false"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Trigger collapse
      </button> */}
      <div id="targetEl" className={`fixed mt-[5rem] duration-700 ${sideBar ?'translate-x-0':'-translate-x-[100%] '}`}>
        <ul class="w-48 rounded-lg  border border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <li class="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
          Dashboard
          </li>
          <li class="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
          Sales
          </li>
          <li class="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
          Payment
          </li>
          <li class="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
          MIS
          </li>
          <li class="w-full rounded-b-lg px-4 py-2">Purchase entry</li>
        </ul>
      </div>
      ̦
    </>
  );
};

export default Navbar;
