import React from "react";
import { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import api from "../../api/axios";
export default function Plans() {
  const [plans, SetPlans] = useState([]);
  useEffect(() => {
    api
      .get("/plans")
      .then((result) => {
        SetPlans(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const DeletePlane = (id) => {
    if (!window.confirm("are you sure you want to delete this plan")) {
      return;
    }
    api.delete(`/plans/${id}`).then(() => {
      SetPlans(plans.filter((plans) => plans.id !== id));
    });
  };
  return (
    <>
      <AdminLayout
        title={"plans managment"}
        text={"manage your plans & create new plans"}
      >
        <div className="page-content">
          <div className="header d-flex align-items-center justify-content-between ">
            <div>
              <h2 className="text-capitalize">
                {" "}
                <i className="fa-solid fa-calendar"></i>plans management
              </h2>
              <p className="text-muted">manage and track all gym plans</p>
            </div>

            <Link to="/plans/add" className="btn btn-sm btn-primary">
              Add new plan
            </Link>
          </div>
          <div id="content">
            <div className="row d-flex">
              {plans.length > 0 ? (
              plans.map((plan) => {
                <div className="card col-3 " key={id}>
                  <div className="card-header d-flex justify-content-between">
                    <h3>{plan.name}</h3>
                    <div className="actions d-flex justify-content-between">
                      <Link to="/plans/edit" className="btn btn">
                        <i className="  fa-solid fa-edit"></i>
                      </Link>
                      <button
                        onClick={() => {
                          DeletePlane(plan.id);
                        }}
                      >
                        <i className=" fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>{plan.description}</p>
                    <h6>{plan.price}</h6>
                  </div>
                </div>;
              })
            ) : (
              <div className="card">
                <h2 className="text-center">No plans avaliable now</h2>
              </div>
            )}
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
