import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/axios";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    api
      .get("/trainers")
      .then((response) => {
        setTrainers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteTrainer = (id) => {
    if (!window.confirm("are you sure you want to delete this trainer")) {
      return;
    }
    api
      .delete(`/trainer/${id}`)
      .then(() => {
        setTrainers(trainers.filter((trainers) => trainers.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminLayout
      title={"trainer"}
      text={"manage your gym trainers"}>
        <div id="content">
          <div className="page-content bg-light p-3">
            {/* Header */}
            <div className="header d-flex align-items-center justify-content-between mb-3">
              <div>
                <h2 className="text-capitalize"><i className=" fa-solid fa-person-running"></i>Trainers management</h2>
                <p className="text-muted">manage and track all gym trainers</p>
              </div>

              <Link to="/trainers/add" className="btn btn-sm btn-primary">
                Add new trainer
              </Link>
            </div>

            {/* Trainers Cards */}
            {trainers.length > 0 ? (
              <div className="row">
                {trainers.map((trainer) => (
                  <div className="col-md-4 mb-4" key={trainer.id}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={trainer.img}
                        className="card-img-top"
                        alt="trainer"
                        style={{ height: "220px", objectFit: "cover" }}
                      />

                      <div className="card-body text-center">
                        <h5 className="card-title">{trainer.name}</h5>
                        <p className="text-muted">{trainer.hireDate}</p>

                        <div className="d-flex justify-content-between mt-3">
                          <Link
                            to={`/trainers/edit/${trainer.id}`}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </Link>

                          <Link
                            to={`/trainers/${trainer.id}`}
                            className="btn btn-sm btn-primary"
                          >
                            View
                          </Link>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteTrainer(trainer.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card text-center p-4">
                <h4 className="text-muted mb-3">No trainers found</h4>
                <Link to="/trainers/add" className="btn btn-primary">
                  Add Trainer
                </Link>
              </div>
            )}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
