import React from "react";
import Offcanvas from "../Components/Offcanvas";
import { Link } from "react-router-dom";
import mypic from "../assets/mypic.jpg";

const DashNavbar = () => {
  return (
    <div>
      <div className="border fixed md:left-52 flex justify-between items-center shadow-md lg:w-11/12  py-2 md:px-28">
        <Offcanvas />
        <div className="flex gap-10 items-center ms-auto ">
          <div>
            <Link to={"/notification"}>Announcement</Link>
          </div>
          
          <div>
            <Link to={"/notification"}>Notification</Link>
          </div>
          
          <div>
            <Link to={"/notification"}>Drop Down</Link>
          </div>
          
          <div>
            <Link to="/profile" className="">
              <img src={mypic} alt="me" className="w-12 h-12 rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
