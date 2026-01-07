export default function NavBar({ title, text, user, email }) {
  return (
    <nav className="navbar-admin d-flex align-items-center justify-content-between">
      <div>
        <h5 className="mb-0">{title}</h5>
        <small className="text-muted">{text}</small>
      </div>

      <div className="d-flex align-items-center gap-2">
        <img
          src="image/Starter pfp.jpg"
          alt="user"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div>
          <h6 className="mb-0">{user}</h6>
          <small className="text-muted">{email}</small>
        </div>
      </div>
    </nav>
  );
}
