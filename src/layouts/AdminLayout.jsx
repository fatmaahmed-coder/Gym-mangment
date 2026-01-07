import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function AdminLayout({ title, text, children }) {
  return (
    <div className="app-layout">
      
      <NavBar
        title={title}
        text={text}
        user="Admin"
        email="admin@gym.com"
      />
      <SideBar />
      <main className="main-content">{children}</main>
    </div>
  );
}
