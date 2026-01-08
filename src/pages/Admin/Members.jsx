import React from "react";
import { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import api from "../../api/axios";
export default function Members() {
  const [members, SetMembers] = useState([]);
  useEffect(() => {
    api
      .get("/members")
      .then((resulte) => {
        SetMembers(resulte.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const DeleteMember = (id) => {
    if (!window.confirm("are you sure you want to delete this member?")) {
      return;
    }
    api.delete(`/members/${id}`).then(() => {
      SetMembers(members.filter((members) => members.id !== id));
    });
  };

  return (
    <>
      <AdminLayout title="Manage Members" text="Be careful about your clients">
        <div className="page-content bg-light p-3">
          <div className="header d-flex align-items-center justify-content-between ">
            <div>
              <h2 className="text-capitalize">
                <i className="fa-solid fa-people-group"></i>Members management
              </h2>
              <p className="text-muted">manage and track all gym members</p>
            </div>

            <Link to="/members/add" className="btn btn-sm btn-primary">
              Add new member
            </Link>
          </div>
          <div id="content">
            <div className="card card">
              <h5 className=" d-flex justify-content-start ">Member list {members.length}</h5>
              <table className="table  table-hover mt-3">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>phone number</th>
                    <th>membership</th>
                    <th>Statues</th>
                    <th>joindate</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.length > 0 ? (
                  members.map((member) => (
                    <tr key={member.id}>
                      <td>{member.name}</td>
                      <td>{member.email}</td>
                      <td>{member.phone}</td>
                      <td>{member.membership}</td>
                      <td>
                        <span className="badge text-light bg-primary">
                          {member.status}
                        </span>
                      </td>
                      <td>{member.join_date}</td>
                      <td>
                        <span >
                        <button
                          className="btn btn-warning "
                          onClick={() => {
                            DeleteMember(member.id);
                          }}
                        >
                          Delete
                        </button>
                        </span>
                        <span>
                        <Link to="/members/edit" className="btn btn-danger">
                          Edit
                        </Link>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">
                      No members found
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
