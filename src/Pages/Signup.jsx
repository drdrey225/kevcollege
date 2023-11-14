import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup = () => {
  let url = "http://localhost:3800/user/signup";
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required*"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required*"),
      email: Yup.string().email("Invalid email address").required("Required*"),
      password: Yup.string()
        .min(6, "Password must be atleast minimum of 6 characters")
        .required("Required*"),
    }),

    onSubmit: (values) => {
      axios
        .post(url, values)

        .then((response) => {
          console.log(response);
          if (response.data.status) {
            toast(response.data.message);
            navigate("/signin");
          } else {
            toast(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(values);
    },
  });

  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <div className="md:w-2/5 w-10/12 md:px-10 px-7 py-6 rounded-lg border shadow-lg relative md:top-28 top-20 mx-auto bg-white mb-8">
          <div className="text-center mb-8 md:text-3xl text-xl text-gray-900 font-semibold font-serif">
            SIGN UP
          </div>
          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="flex flex-col"
          >
            <small className="text-red-500">{formik.errors.firstName}</small>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              className="mb-4 py-3 px-4 outline-green-700 outline-1 border border-green-800 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />

            <small className="text-red-500">{formik.errors.lastName}</small>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              className="form-cotrol mb-4  py-3 px-4  outline-green-700 outline-1 border border-green-800 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />

            <small className="text-red-500">{formik.errors.email}</small>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-cotrol mb-4 py-3 px-4  outline-green-700 outline-1 border border-green-800   rounded-md"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <small className="text-red-500">{formik.errors.password}</small>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-cotrol mb-4 py-3 px-4  outline-green-700 outline-1 border border-green-800     rounded-md"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <div className="md:w-64 md:mx-auto py-4">
              <button
                type="submit"
                className=" border text-black hover:bg-rose-800 transition hover:transition duration-500 delay-150 w-full py-3 rounded-md hover:text-white"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="flex gap-2 justify-center">
            <p>Already have an account?</p>
            <button className="text-blue-500 cursor-pointer">
              <Link to="/signin">Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
