import React from "react";
import Footer from "../Components/Footer";
import certificate from "../assets/certificate.jpg";
import graduate2 from "../assets/graduate2.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "../Redux/Counter";

const Home = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log();

  return (
    <>
      <Navbar />
      {/* <div className="flex gap-3 items-center relative top-16">
        <button className="border rounded-lg hover:bg-slate-700 hover:text-white py-2 px-8 bg-slate-400" onClick={() => dispatch(increament())}>Increament</button>
        <div>{count}</div>
        <button className="border rounded-lg hover:bg-slate-700 hover:text-white py-2 px-8 bg-slate-400" onClick={() => dispatch(decreament())}>Decreament</button>
      </div> */}
      <div className="bg-zinc-100 relative top-16 pt-5">
        <div className="flex md:flex-row flex-col md:w-9/12 mx-auto md:px-9 px-7 ">
          <div className="p-8 bg-slate-50">
            <h1 className="text-6xl font-bold text-green-900 py-8 mb-8">
              Study to <br /> Become a <br />
              Global Talent!
            </h1>
            <p className="text-lg text-gray-600">
              Learn new Tech skills using a world-class curriculum from top
              industry experts in an accredited institution.
            </p>

            <button className="bg-rose-900 hover:bg-rose-800 text-white hover:shadow-lg px-12 py-3 rounded-lg my-8">
              <Link to="/signup">Start now</Link>
            </button>
          </div>

          <div>
            <img src={certificate} alt="college" className="rounded" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:w-9/12 mx-auto md:px-9 py-16">
          <div className="w-full pt-2">
            <img src={graduate2} alt="college" className="rounded shadow-lg" />
          </div>
          <div className="px-14 bg-slate-100 w-full">
            <h1 className="font-bold text-3xl text-slate-800 mb-5 font-mono">
              KEV COLLEGE AT A STANCE
            </h1>
            <p className="mb-4 font-mono text-gray-600">
              KEV College of ICT is an accredited institution. KEV College of
              ICT offers both National Diploma (2 years), Professional Diploma
              (1 year) and Certificate Courses (from 2 weeks).
            </p>
            <p className="mb-4 font-mono text-gray-600">
              The National Innovative Diploma conforms with the standard
              National Diploma Certificate obtained in Polytechnics while the
              Professional certificate is the certificate you earn after taking
              a professional course here at SQI. You can use the Diploma
              certificate to seek admissions into the University through Direct
              Entry or for Higher National Diploma (HND).
            </p>
            {/* <p className="mb-6 font-mono text-gray-600">
            You can use the Diploma certificate to seek admissions into the
            University through Direct Entry or for Higher National Diploma
            (HND). While the professional Certificate is recognized worldwide
            not as a degree but as a proof of having undergone professional
            training in the field for which the certificate is issued.
          </p> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
