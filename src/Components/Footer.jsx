import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-around  mx-auto p-12  md:p-7 bg-slate-50">
        <div className="md:mb-0 mb-10">
          <h1 className="font-bold text-green-900 text-2xl mb-5">
            Hello, we’re KEV College of ICT
          </h1>
          <p className="mb-3">We provide and lead others in <br /> quality ICT education.</p>
          <p>Reach out to us</p>
          <a href="edu.kev.ng" className="text-blue-600">
            enquiry@edu.kev.ng
          </a>
        </div>

        <div>
          <h1 className="font-bold text-slate-800 text-2xl">Quick Links</h1>
          <div className="flex flex-col gap-3 py-6">
            <Link to="/signup">Application Portal</Link>
            <Link to="/signin">Student Portal</Link>
            <Link to="/about">About us</Link>
            <Link to="/procourses">Professional Courses</Link>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-slate-800 text-2xl">Help & Supports</h1>
          <div className="flex flex-col gap-3 py-6">
            <Link to="/help">Help</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/contactus">Contact us</Link>
            <Link to="/scholaship">Scholaship Awareness</Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 flex md:flex-row flex-col justify-around  md:py-4 py-2 px-12">
        <p className="text-white md:mb-0 mb-3">Copyright © 2023 | SQI ICT Consultants. All Rights Reserved.</p>
        <div className="flex md:flex-row gap-4">
          <Link to="/terms&condition" className="text-white hover:underline ">Terms & Condition</Link>
          <Link to="/privacypolicy" className="text-white hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
