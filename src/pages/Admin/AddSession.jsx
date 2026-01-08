import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/axios";
import "../../style/form.css"

export default function AddSession() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Plan name is required"),
    capacity:Yup.number().required("session capacity is required"),
    startTime: Yup.date().required("start time is required"),
    endTime: Yup.date().required("end time is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <AdminLayout
      title="Add New session"
      text="Create a new gym session"
    >
      <div className="page-content">
        <div className="card p-4">
          <h3 className="mb-4">Add New session</h3>

          <Formik
            initialValues={{
              name: "",
              startTime:"",
              endTime:"",
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              api
                .post("http://localhost:8000/api/sessions/add", values)
                .then((res) => {console.log(res)
                })
                .catch((err) => console.log(err))
                
            }}
          >
            
              <Form>
               
                <div className="mb-3">
                  <label htmlFor="session name" className="form-label">Session Name</label>
                  <Field name="name" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                    <label htmlFor="session" className="form-label">Session Start Time</label>
                    <input type="datetime-local" name="sessionStart" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="session" className="form-label">Session end Time</label>
                    <input type="datetime-local" name="sessionEnd" className="form-control"  />
                </div>

                
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
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                 Submit  
                </button>
              </Form>
           
          </Formik>
        </div>
      </div>
    </AdminLayout>
  );
}
