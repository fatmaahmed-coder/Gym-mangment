import React, { useEffect, useState } from "react";
import MemberLayout from "../../layouts/MemberLayout";
import axios from "axios";


const fakeProfileData = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    gender: "Male",
    memberId: "GM-2024-1214",
    notifications: {
        email: true,
        sms: false,
        push: true,
        reminders: true
    }
};


export default function Profile() {
    const [profile, setProfile] = useState(fakeProfileData);
    const [passwordData, setPasswordData] = useState({
        current: "",
        new: "",
        confirm: ""
    });

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/member/profile")
            .then(res => {
                if (res.data && Object.keys(res.data).length > 0) {
                    setProfile({ ...fakeProfileData, ...res.data });
                }
            })
            .catch(err => console.error(err));
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleNotificationChange = key => {
        setProfile(prev => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [key]: !prev.notifications[key]
            }
        }));
    };

    const handleSaveProfile = () => {
        axios.post("http://localhost:8000/api/member/profile/update", profile);
    };

    const handlePasswordChange = () => {
        axios.post("http://localhost:8000/api/member/profile/password", passwordData);
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
            axios.delete("http://localhost:8000/api/member/profile/delete");
        }
    };

    return (
        <MemberLayout title="Profile & Settings">
            <div className="min-vh-100 bg-light" style={{ width: "73vw", padding: "30px" }}>

                <div className="mb-4">
                    <h3 className="fw-bold mb-1">Profile & Settings</h3>
                    <p className="text-muted">Manage your personal information and preferences</p>
                </div>

                <div className="bg-white p-4 rounded-4 shadow-sm mb-4 d-flex align-items-center">
                    <img
                        src="https://i.pravatar.cc/80"
                        alt="profile"
                        className="rounded-circle me-3"
                    />
                    <div>
                        <h6 className="fw-bold mb-1">{profile.name}</h6>
                        <p className="text-muted mb-2">Member ID: {profile.memberId}</p>
                        <button className="btn btn-outline-primary btn-sm">
                            Change Photo
                        </button>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                    <h5 className="fw-bold mb-3">Personal Information</h5>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Gender</label>
                            <select
                                className="form-select"
                                name="gender"
                                value={profile.gender}
                                onChange={handleChange}
                            >
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>

                    <button
                        className="btn text-white mt-4"
                        style={{ background: "linear-gradient(90deg,#1e3c72,#2a9d8f)" }}
                        onClick={handleSaveProfile}
                    >
                        Save Changes
                    </button>
                </div>

                <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                    <h5 className="fw-bold mb-3">
                        <i className="fa-solid fa-lock me-2 text-primary"></i>
                        Change Password
                    </h5>

                    <div className="mb-3">
                        <label className="form-label">Current Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={e =>
                                setPasswordData({ ...passwordData, current: e.target.value })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={e =>
                                setPasswordData({ ...passwordData, new: e.target.value })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={e =>
                                setPasswordData({ ...passwordData, confirm: e.target.value })
                            }
                        />
                    </div>

                    <button className="btn btn-primary" onClick={handlePasswordChange}>
                        Update Password
                    </button>
                </div>

                <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                    <h5 className="fw-bold mb-3">
                        <i className="fa-solid fa-bell me-2 text-warning"></i>
                        Notification Preferences
                    </h5>

                    {[
                        { key: "email", label: "Email Notifications" },
                        { key: "sms", label: "SMS Notifications" },
                        { key: "push", label: "Push Notifications" },
                        { key: "reminders", label: "Session Reminders" }
                    ].map(item => (
                        <div
                            key={item.key}
                            className="d-flex justify-content-between align-items-center mb-3"
                        >
                            <span>{item.label}</span>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={profile.notifications[item.key]}
                                    onChange={() => handleNotificationChange(item.key)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 rounded-4 border border-danger bg-danger-subtle">
                    <h5 className="fw-bold text-danger mb-2">Danger Zone</h5>
                    <p className="text-muted mb-3">
                        Once you delete your account, there is no going back. Please be certain.
                    </p>

                    <button className="btn btn-danger" onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </div>

            </div>
        </MemberLayout>
    );
}
