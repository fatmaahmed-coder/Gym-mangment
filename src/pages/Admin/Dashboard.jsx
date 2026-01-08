import AdminLayout from "../../layouts/AdminLayout";
import members from "./Members";
import trainers from "./Trainers";
import plans from "./Plans";
import sessions from "./Session";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <AdminLayout title="Admin dashboard" text="manage your gym flow">
      <div className="page-content">
        <div className="dashboard-page">
          <div className="row ">
            <div className="members col-3">
              <div className="card card">
                <p className="text-muted">total members</p>
                <div className=" d-flex justify-content-between">
                  <h4>{members.length}</h4>
                  <h4>
                    <i className=" fa-solid fa-people-group text-primary"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="trainers col-3">
              <div className="card card">
                <p className="text-muted">total trainers</p>
                <div className=" d-flex justify-content-between">
                  <h4>{trainers.length}</h4>
                  <h4>
                    <i className=" fa-solid fa-person-running text-primary"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className=" plans col-3">
              <div className="card card">
                <p className="text-muted">total plans</p>
                <div
                  className=" d-flex justify-content-between
                "
                >
                  <h4>{plans.length}</h4>
                  <h4>
                    <i className=" fa-solid fa-list-check text-primary"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className=" sessions col-3">
              <div className="card card">
                <p className="text-muted">total sessions</p>
                <div
                  className=" d-flex justify-content-between
                "
                >
                  <h4>{sessions.length}</h4>
                  <h4>
                    <i className=" fa-solid fa-calendar text-primary"></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="card card mt-5">
            <h3 className="text-capitalize "> quick actions </h3>
            <div className="row gap-5 mt-3">
              <div className="members  card  col-2  bg-info">
                <Link to={"/members/add"} className="nav-link text-light">
                  {" "}
                  <i className=" fa-solid text-light fa-people-group"></i> Add
                  New member{" "}
                </Link>
              </div>
              <div className="trainers  card col-3 bg-warning">
                <Link to={"/trainers/add"} className="nav-link text-light">
                  {" "}
                  <i className=" fa-solid text-light fa-person-running"></i> Add
                  New Trainer{" "}
                </Link>
              </div>
              <div className="plans  card col-3  bg-success">
                <Link to={"/plans/add"} className="nav-link text-light">
                  {" "}
                  <i className=" fa-solid text-light fa-people-group"></i> Add
                  New Plan{" "}
                </Link>
              </div>
              <div className="sessions  card col-2  bg-primary">
                <Link to={"/sessions/add"} className="nav-link text-light">
                  {" "}
                  <i className=" fa-solid text-light fa-people-group"></i> Add
                  New session{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
