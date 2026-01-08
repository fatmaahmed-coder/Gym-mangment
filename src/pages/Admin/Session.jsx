import React from "react";
import { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import api from "../../api/axios";
export default function Session() {
  const [sessions, SetSessions] = useState([]);
  useEffect(() => {
    api
      .get("/sessions")
      .then((result) => {
        SetSessions(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const DeleteSession = (id) => {
    if (!window.confirm("Are you sure you want to delete this session")) {
      return;
    }
    api.delete(`/sessions/${id}`).then(() => {
      SetSessions(sessions.filter((sessions) => sessions.id !== id));
    });
  };
  return (
    <>
      <AdminLayout
        title={"sessions managment"}
        text={"manage your gym sessions"}
      >
        <div className="page-content bg-light p-3">
          <div className="header d-flex align-items-center justify-content-between ">
            <div>
              <h2 className="text-capitalize">
                <i className="fa-solid fa-calendar"></i>sessions management
              </h2>
              <p className="text-muted">manage and track all gym sessions</p>
            </div>

            <Link to="/sessions/add" className="btn btn-sm btn-primary">
              Add new session
            </Link>
          </div>
          <div id="content">
            <div className="card card">
              <h4 className="d-flex justify-content-start">
                Sessions List {sessions.length}
              </h4>
              <table className="table table-hover mt-3">
                <thead>
                  <tr>
                    <th>Session name</th>
                    <th>Session Capacity</th>
                    <th>Session Start time</th>
                    <th>session end time</th>
                    <th>session Description</th>
                    <th> Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {sessions.length > 0 ? (
                    sessions.map((sessions) => (
                      <tr key={sessions.id}>
                        <td>{sessions.name}</td>
                        <td>{sessions.capacity}</td>
                        <td>{sessions.startTime}</td>
                        <td>{sessions.endTime}</td>
                        <td>{sessions.description}</td>
                        <td>
                          <span>
                            <Link
                              to="/sessions/edit"
                              className="btn btn-danger"
                            >
                              Edit
                            </Link>
                          </span>
                          <span>
                            <button
                              onClick={() => {
                                DeleteSession(sessions.id);
                              }}
                            >
                              Delete
                            </button>
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center text-muted">
                        No sessions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
