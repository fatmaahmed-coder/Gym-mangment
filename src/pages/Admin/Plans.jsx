import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import api from "../../api/axios";

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api
      .get("/plans")
      .then((res) => {
        setPlans(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePlan = (id) => {
    if (!window.confirm("Are you sure you want to delete this plan?")) return;

    api.delete(`/plans/${id}`).then(() => {
      setPlans(plans.filter((plan) => plan.id !== id));
    });
  };

  return (
    <AdminLayout
      title="Plans Management"
      text="Manage your plans & create new plans"
    >
      <div className="page-content">
        <div className="header d-flex align-items-center justify-content-between">
          <div>
            <h2>
              <i className="fa-solid fa-list me-2"></i>
              Plans Management
            </h2>
            <p className="text-muted">Manage and track all gym plans</p>
          </div>

          <Link to="/plans/add" className="btn btn-sm btn-primary">
            Add New Plan
          </Link>
        </div>

        <div className="row mt-4">
          {plans.length > 0 ? (
            plans.map((plan) => (
              <div className="col-md-3 mb-4" key={plan.id}>
                <div className="card h-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{plan.name}</h5>
                    <div className="actions">
                      <Link
                        to={`/plans/edit/${plan.id}`}
                        className="btn btn-sm btn-outline-primary me-2"
                      >
                        <i className="fa-solid fa-edit"></i>
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deletePlan(plan.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="text-muted">{plan.description}</p>
                    <h4>{plan.price}$</h4>
                    <span className="badge bg-success">
                      {plan.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="card p-4 text-center">
                <h4>No plans available now</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

