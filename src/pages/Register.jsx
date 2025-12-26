import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Register() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone must be 11 digits")
      .required("Phone is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gender: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        axios
          .post("http://localhost:8000/api/register", values)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }}
    >
      <div className="container mt-5">
        <div className="card p-4">
          <h2 className="text-center">Sign Up To GymFlow</h2>

          <Form>
            <div className="mb-3">
              <label className="form-label d-flex justify-content-between">
                Name
              </label>
              <Field name="name" className="form-control" />
              <ErrorMessage
                name="name"
                className="text-danger"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label className="form-label d-flex justify-content-between">
                Email
              </label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage
                name="email"
                className="text-danger"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label className="form-label d-flex justify-content-between">
                Phone
              </label>
              <Field
                name="phone"
                className="form-control"
                placeholder="01xxxxxxxxx"
              />
              <ErrorMessage
                name="phone"
                className="text-danger"
                component="div"
              />
            </div>
            <div className="mb-3">
              <label className="form-label d-flex justify-content-between">
                Password
              </label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage
                name="password"
                className="text-danger"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label className="form-label d-flex justify-content-between">
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                className="text-danger"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label d-flex justify-content-between">
                Gender
                <label className="me-3 ">
                  <Field type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" /> Female
                </label>
              </label>
              <ErrorMessage
                name="gender"
                className="text-danger"
                component="div"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
