import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../style/form.css";

export default function AddMembers() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone must be 11 digits")
      .required("Phone is required"),
    city: Yup.string().required("City is required"),
    street: Yup.string().required("Street is required"),
    building_number: Yup.string().required("Building number is required"),
    gender: Yup.string().required("Gender is required"),
    
  });

  return (
    <AdminLayout
    title={"edit members"}
    text={"edit your members info"}>
      <div className="auth-container">
        <div className="auth-card p-4">
          <h2 className="text-center">Sign Up To GymFlow</h2>
          <p className="text-center text-muted mb-4">
           edit  member account
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              city: "",
              street: "",
              building_number: "",
              gender: "",
             
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              axios
                .post("http://localhost:8000/api/members/edit", values)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
            }}
          >
            <Form>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Name</label>
                <Field name="name" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="form-error text-danger"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="form-error text-danger"
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <Field name="phone" className="form-control" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="form-error text-danger"
                />
              </div>

              {/* Address */}
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">City</label>
                  <Field name="city" className="form-control" />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="form-error text-danger"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Street</label>
                  <Field name="street" className="form-control" />
                  <ErrorMessage
                    name="street"
                    component="div"
                    className="form-error text-danger"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Building No.</label>
                  <Field name="building_number" className="form-control" />
                  <ErrorMessage
                    name="building_number"
                    component="div"
                    className="form-error text-danger"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="mb-3">
                <label className="form-label d-block">Gender</label>
                <div className="gender-group d-flex gap-4">
                  <label>
                    <Field type="radio" name="gender" value="male" /> Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="female" /> Female
                  </label>
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="form-error text-danger"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 submit-btn"
              >
                submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </AdminLayout>
  );
}

