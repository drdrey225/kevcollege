import React, { useEffect, useState } from "react";
import DashSidebar from "../Components/DashSidebar";
import DashUserInfo from "../Components/DashUserInfo";
import DashNavbar from "../Components/DashNavbar";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  let url = "http://localhost:3800/user/dashboard";
  const navigate = useNavigate;
  const [user, setUser] = useState("");

  useEffect(() => {
    let token = localStorage.token;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (!response.data.status) {
          console.log("wrongt token");
          navigate("/signin");
        } else {
          console.log("Welcome");
          setUser(response.data.result.email);
          console.log(response.data.result.email);
        }
      });
  }, []);

  return (
    <>
      <div>
        <DashSidebar />
        <DashNavbar />
        {/* <DashUserInfo /> */}
        <div className="relative top-16 left-56 ">
          <h1 className="text-2xl">Welcome {user}</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
