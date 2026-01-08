import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/axios";

export default function AddPlan() {
  

  const validationSchema = Yup.object({
    name: Yup.string().required("Plan name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .positive("Price must be positive")
      .required("Price is required"),
    status: Yup.string().required("Status is required"),
  });

  return (
    <AdminLayout title="Add New Plan" text="Create a new gym plan">
      <div className="page-content">
        <div className="card p-4">
          <h3 className="mb-4">Add New Plan</h3>

          <Formik
            initialValues={{
              name: "",
              description: "",
              price: "",
              status: "active",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              api
                .post("http://localhost:8000/api/plans/add", values)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err));
            }}
          >
            <Form>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Plan Name</label>
                <Field name="name" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="small"
                  className="text-danger"
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  className="form-control"
                  rows="3"
                />
                <ErrorMessage
                  name="description"
                  component="small"
                  className="text-danger"
                />
              </div>

              {/* Price */}
              <div className="mb-3">
                <label className="form-label">Price</label>
                <Field type="number" name="price" className="form-control" />
                <ErrorMessage
                  name="price"
                  component="small"
                  className="text-danger"
                />
              </div>

              {/* Status */}
              <div className="mb-3">
                <label className="form-label">Status</label>
                <Field as="select" name="status" className="form-select">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="small"
                  className="text-danger"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
               submit {isSubmitting ? "Saving..." : "Create Plan"}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </AdminLayout>
  );
}
