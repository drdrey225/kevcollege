import React, { useState } from "react";
import DashSidebarSM from "./DashSidebarSM";


const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = () => {
    setIsOpen(true);
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
  };

  return (
    <div className=" md:hidden z-auto  ">
      <button className="rounded py-1 hover:bg-slate-200" onClick={openOffcanvas}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </button>

      {/* Offcanvas container */}
      {isOpen && (
        <div className="fixed inset-0 overflow-hidden">
          {/* Offcanvas overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeOffcanvas}
          ></div>

          {/* Offcanvas content */}
          <div className="absolute inset-y-0 w-72 flex">
            <div className="relative w-screen max-w-md">
              {/* Offcanvas header */}
              {/* <div className="flex items-start justify-between p-5 bg-blue-500">
                <h2 className="text-white text-lg font-semibold">Dashboard</h2>
                <button className="" onClick={closeOffcanvas}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div> */}

              {/* Offcanvas body */}
              <div className="p-5 bg-white h-full">
                {/* Your offcanvas content goes here */}
                <DashSidebarSM />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offcanvas;
