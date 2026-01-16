import React from 'react'

export default function Membernavbar({ title, user, email }) {
    return (
        <div>
            <nav className="d-flex align-items-center justify-content-between bg-white border-bottom px-4 py-2">
                <div>
                    <h5 className="mb-0 ms-4">{title}</h5>
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
        </div>
    )
}
