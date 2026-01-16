import { NavLink } from "react-router-dom";

export default function Membersidebar() {
  const menuItems = [
    { to: "/memberdashboard", icon: "fas fa-home", label: "Dashboard" },
    { to: "/membership", icon: "fas fa-users", label: "My Membership" },
    { to: "/membersessions", icon: "fas fa-user-check", label: "Sessions" },
    { to: "/booksession", icon: "fas fa-credit-card", label: "Book Session" },
    { to: "/progress", icon: "fas fa-chart-line", label: "My Progress" },
    { to: "/profile", icon: "fas fa-user", label: "Profile" },
  ];

  return (
    <ul className="nav flex-column gap-3 mt-4 px-3 bg-white">
      {menuItems.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `nav-link d-flex align-items-center px-3 py-2 rounded-3 ${
                isActive ? "bg-primary text-white" : "text-dark"
              }`
            }
            style={{
              transition: "all 0.2s ease",
              boxShadow: "none", // نحذف أي ظل افتراضي
              border: "none",    // نحذف أي حدود
              backgroundColor: "transparent", // نخلي الخلفية شفافة للينكات غير مختارة
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.backgroundColor = "#93b7ec"; // أزرق عند hover
              e.currentTarget.style.color = "white";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.classList.contains("active")) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.boxShadow = "none";
              } else {
                // الصفحة المختارة: أزرق ثابت بدون رفع
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "#3a7ee5";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.15)";
              }
            }}
          >
            <i className={`${item.icon} me-3`}></i>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
