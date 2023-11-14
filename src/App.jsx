import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./Components/PageNotFound";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if ("serviceworker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("sw registered: ", registration);
          })
          .catch((registrationerror) => {
            console.log("sw registration failed:", registrationerror);
          });
      });
    }
  }, []);

  let token = localStorage.token;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to={"/signin"} />}
        />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
