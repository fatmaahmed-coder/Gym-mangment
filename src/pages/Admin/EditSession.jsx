import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSession() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    api
      .get(`/sessions/${id}`)
      .then((res) => {
        setSession(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Plan name is required"),
    capacity: Yup.number().required("session capacity is required"),
    startTime: Yup.date().required("start time is required"),
    endTime: Yup.date().required("end time is required"),
    description: Yup.string().required("Description is required"),
  });

  if (!session) {
    return (
      <AdminLayout title="Edit session" text="Loading session data">
        <div className="page-content">
          <p>Loading...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Edit Plan" text="Update gym plan">
      <div className="page-content">
        <div className="card p-4">
          <h3 className="mb-4">Edit session</h3>

          <Formik
            enableReinitialize
            initialValues={{
              name: "",
              startTime: "",
              endTime: "",
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              api
                .put(`/sessions/${id}`, values)
                .then(() => {
                  navigate("/sessions");
                })
                .catch((err) => console.log(err))
                .finally(() => setSubmitting(false));
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="session name" className="form-label">
                    Session Name
                  </label>
                  <Field name="name" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="session" className="form-label">
                    Session Start Time
                  </label>
                  <input
                    type="datetime-local"
                    name="sessionStart"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="session" className="form-label">
                    Session end Time
                  </label>
                  <input
                    type="datetime-local"
                    name="sessionEnd"
                    className="form-control"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  submit {isSubmitting ? "Saving..." : "Update Plan"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AdminLayout>
  );
}
