import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../style/form.css";
export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invailed email format")
      .required("email is required"),
    password: Yup.string()
      .min(8, "password must be at least 8 characters")
      .required("password is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberme: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:8000/api/login", values)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }}
      >
        <div className="container">
          <div className="auth-container">
            <div className="auth-card p-4">
              <div className="card card-boarder">
                <h2 className="text-center">Sign In To GymFlow</h2>
                <p className="text-center text-muted text-capitalize">
                  enter your data to access the admin dashboard
                </p>
                <Form>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label d-flex justify-content-between"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      aria-describedby="emailHelpId"
                      placeholder="youremail@mail.com"
                    />
                    <ErrorMessage
                      name="email"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label d-flex justify-content-between"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="enter your password"
                    />
                    <ErrorMessage
                      name="password"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="mb-3  d-flex justify-content-between">
                    <div className="form-check form-check-inline ">
                      <Field
                        className="form-check-input "
                        type="checkbox"
                        name="remeberme"
                        value="option1"
                      />
                      <label className="form-check-label d-flex " htmlFor="">
                        Remember me
                      </label>
                    </div>
                    <a href="/" className="link nav-link">
                      Forgot your password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="btn  text-uppercase"
                    id="submit-btn"
                  >
                    sign in
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
}
