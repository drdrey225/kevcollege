import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signin = () => {
  let url = "http://localhost:3800/user/signin";
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required*"),
      password: Yup.string()
        .min(6, "Password must be atleast minimum of 6 characters")
        .required("Required*"),
    }),

    onSubmit: (values) => {
      axios
        .post(url, values)
        .then((response) => {
          console.log(response)
          if (response.data.status) {
            toast(response.data.message)
            // console.log(response.data.message)
            localStorage.token = response.data.token
            navigate("/dashboard")
            console.log("dashboard");
          } else {
            toast(response.data.message)
          }
        })
        .catch((error) => {
          toast(response.data.message)
          console.log(error)
        })
      console.log(values);
    },
  });

  return (
    <>
      <div className="md:w-2/5 w-4/5 mx-auto border shadow  px-10 py-7 rounded-lg relative top-28">
        <h1 className="text-center mb-8 text-3xl text-gray-900 font-semibold font-serif">
          Sign In
        </h1>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="flex flex-col"
        >
          <small className="text-red-500">{formik.errors.email}</small>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-cotrol mb-4 py-3 px-4 outline-green-700 outline-1 border border-green-800   rounded-md"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <small className="text-red-500">{formik.errors.password}</small>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4 py-3 px-4 border border-green-800 rounded-md outline-green-700 outline-1"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button
            type="submit"
            className=" mx-auto border border-rose-800 text-black hover:bg-rose-800 transition hover:transition duration-500 delay-150 py-3 hover:text-white w-64 my-5 rounded"
          >
            Sign In
          </button>
        </form>

        <div className="flex gap-2 justify-center">
          <p>Don't have an Account yet?</p>
          <button className="text-blue-500 cursor-pointer">
            <Link to="/signup">Create Account</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
