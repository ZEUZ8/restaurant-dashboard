import React from "react";
import lightIcon from "../assets/lightIcon.png";
import main from "../assets/main.png";
import Vector from "../assets/Vector.png";


const Login = () => {
  return (
    <>
      <nav className="flex justify-between p-10 items-center">
        <div className="text-white">Login</div>
        <div>
          <img
            src={lightIcon}
            alt="light"
            onClick={() => {
              console.log("light clicked");
            }}
          />
        </div>
      </nav>
      <div>
        <div className="flex justify-evenly">

          <div className="hidden lg:block text-white w-1/2 ">
            <div className="relative p-[10%]">
              <img
                src={Vector}
                alt="Bottom Image"
                className="w-full max-h-full"
              />


              <img
                src={main}
                alt="Top Image"
                className="absolute top-0 left-0 w-full  z-10 ml-[8%] mt-[8%] max-h-full"
              />
            </div>
          </div>

          <div className="flex flex-col max-h-screen p-5 lg:w-1/2">
            <div className="flex justify-center">
              <div className="text-white dark:text-white p-9 lg:max-w-[80%] text-center">
                <p>
                  "Welcome to the future of restaurant reporting! We're serving
                  up a fresh approach to streamline your restaurant management,
                  making data deliciously easy to digest."
                </p>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="w-full bg-[#2F2F2F] rounded-2xl shadow-lg shadow-[#2F2F2F] border border-[#2F2F2F] md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#2F2F2F] ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div className="flex flex-col gap-5 mb-3">
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="bg-gray-50 border border-[#2F2F2F] shadow-[#2F2F2F] shadow-lg text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-[1.5rem] dark:bg-[#414141] dark:border-[#414144] dark:placeholder-[#666666] "
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="pt-0">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="bg-[#414141] border border-[#2F2F2F] shadow-[#2F2F2F] shadow-lg text-black sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-[1.5rem] dark:bg-[#414141] dark:border-[#414143] dark:placeholder-[#666666] "
                          required=""
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="w-full  text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm  py-[1.3rem]  text-center  dark:hover:bg-[#020403] "
                    >
                      Login
                    </button>
                    <p class="text-sm  font-light text-center text-white dark:text-white">
                      {/* Don’t have an account yet? */}
                      By continuing. you agree to (name)’s Terms of service and
                      Privacy policy
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
