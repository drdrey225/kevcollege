import React from "react";
import Offcanvas from "../Components/Offcanvas";

const DashUserInfo = () => {
  return (
    <>
      <div className="border relative md:left-52 py-2 top-16 md:w-10/12 px-12">
        <div>
          <h1>{user}</h1>
        </div>
      </div>
    </>
  );
};

export default DashUserInfo;
