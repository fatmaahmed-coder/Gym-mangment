import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import MemberLayout from '../../layouts/MemberLayout'



const fakeMembership = {
    status: "Active",
    planName: "Premium Annual",
    duration: "12 Months",
    price: 599,
    startDate: "January 15, 2024",
    expiryDate: "January 14, 2025",
    features: [
        "Unlimited gym access",
        "All group classes included",
        "Personal trainer sessions (4/month)",
        "Nutrition consultation",
        "Guest passes (2/month)"
    ],
    paymentHistory: [
        { date: "Jan 15, 2024", method: "Visa ****4532", amount: 599, status: "Paid" },
        { date: "Jan 15, 2023", method: "Visa ****4532", amount: 599, status: "Paid" }
    ]
};

export default function MembershipCard() {
    const [membership, setMembership] = useState(fakeMembership);

    useEffect(() => {
        axios.get("http://localhost:8000/api/member/membership")
            .then(res => {
                if (res.data && Object.keys(res.data).length > 0) {
                    setMembership(res.data);
                }
            })
            .catch(() => {
            });
    }, []);





    return (
        <MemberLayout title="GymFlow">
            <div className="min-vh-100 bg-light" style={{ width: "73vw", padding: "30px" }}>

                <h2 >My Membership</h2>
                <p className="text-muted">Manage your membership and billing information
                </p>
                <div
                    className="shadow-sm p-4 text-white rounded-4"
                    style={{ background: "linear-gradient(90deg, #1e3c72, #2a9d8f)" }}
                >
                    <span className="badge bg-success mb-2">{membership.status}</span>
                    <h4 className="card-title">{membership.planName}</h4>
                    <p className="mb-2">{membership.duration} membership</p>
                    <h5>${membership.price}/year</h5>
                    <div className="d-flex mt-3 gap-3">
                        <div className="d-flex align-items-center">
                            <FaCalendarAlt className="me-2" /> Start: {membership.startDate}
                        </div>
                        <div className="d-flex align-items-center">
                            <FaCalendarAlt className="me-2" /> Expiry: {membership.expiryDate}
                        </div>
                    </div>
                </div>



                <div className="card mb-4 shadow-sm mt-4">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Plan Features</h5>
                        <ul className="list-unstyled mb-0">
                            {membership.features.map((feature, idx) => (
                                <li key={idx} className="mb-1">
                                    <FaCheck className="text-success me-2" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-gradient mt-3" style={{ background: "linear-gradient(90deg, #1e3c72, #2a9d8f)", color: "#fff" }}>
                            Renew Membership
                        </button>
                    </div>
                </div>

                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Payment History</h5>
                        {membership.paymentHistory.map((pay, idx) => (
                            <div key={idx} className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded-2">
                                <div>
                                    <div>{pay.date}</div>
                                    <small className="text-muted">{pay.method}</small>
                                </div>
                                <div>
                                    ${pay.amount.toFixed(2)} <span className="badge bg-success ms-2">{pay.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card mb-4 shadow-sm" style={{ background: "#ffe5d9" }}>
                    <div className="card-body">
                        <h5 className="card-title">Upgrade Your Experience</h5>
                        <p>Get access to premium facilities, exclusive classes, and priority booking with our Elite membership.</p>
                        <button className="btn" style={{ background: "#ff944d", color: "#fff" }}>Explore Plans</button>
                    </div>
                </div>
            </div>

        </MemberLayout>
    );
}
