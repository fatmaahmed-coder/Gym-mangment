
import AdminLayout from "../../layouts/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout
      title="Admin dashboard"
      text="manage your gym flow"
    >
      <div className="page-content">
      <div className="dashboard-page">
        <h2 className="fw-bold">Dashboard</h2>
        <p className="text-muted">
          Overview of your gym performance and activities
        </p>
      </div>
      </div>
    </AdminLayout>
  );
}


