import React from "react";

const Notion = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div>
          <div>
            <h1>Welcome Back,</h1>
            <p>You are logged in as solomoneseme@gmail,con</p>
          </div>

          {/* ====================================Graph Analytics============================================== */}
          <div className="flex w-full justify-between gap-x-4">
            <div className="flex-1 bg-white shadow-sm rounded-lg border-b border-gray-400">
              <div className="flex justify-between items-center w-full border-b p-5">
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Page Views Chart
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-3">
                    Keep track of this month's pageviews from here.
                  </p>
                </div>
                <select
                  name="month"
                  id="month"
                  className="text-md rounded-md font-bold text-black"
                >
                  <option value="thirty" className="">
                    Last 30 Days
                  </option>
                </select>
              </div>
            </div>
            <div className="w-[30%] bg-white border-1 border-gray-400 h-36"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notion;
