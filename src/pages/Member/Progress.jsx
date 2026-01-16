import React, { useEffect, useState } from "react";
import MemberLayout from "../../layouts/MemberLayout";
import axios from "axios";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const fakeProgressData = {
    progress: 73,
    startWeight: 185,
    currentWeight: 173,
    totalLoss: 12,

    weightChart: [
        { month: "Jul", weight: 186 },
        { month: "Aug", weight: 183 },
        { month: "Sep", weight: 179 },
        { month: "Oct", weight: 176 },
        { month: "Nov", weight: 172 },
        { month: "Dec", weight: 170 }
    ],

    attendance: [
        { month: "Jul", sessions: 12 },
        { month: "Aug", sessions: 15 },
        { month: "Sep", sessions: 18 },
        { month: "Oct", sessions: 14 },
        { month: "Nov", sessions: 20 },
        { month: "Dec", sessions: 16 }
    ],

    goals: [
        { title: "Attend 20 sessions this month", completed: 17, total: 20 },
        { title: "Reach target weight of 170 lbs", completed: 173, total: 170 },
        { title: "Complete 10 HIIT sessions", completed: 6, total: 10 }
    ],

    achievements: [
        {
            title: "30-Day Streak",
            description: "Attended sessions for 30 consecutive days",
            icon: "fa-fire",
            color: "warning"
        },
        {
            title: "Weight Goal",
            description: "Lost 10 lbs in 3 months",
            icon: "fa-weight-scale",
            color: "primary"
        },
        {
            title: "Class Champion",
            description: "Completed 50 group classes",
            icon: "fa-trophy",
            color: "success"
        }
    ]
};


export default function Progress() {
    const [data, setData] = useState(fakeProgressData);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/member/progress")
            .then(res => {
                if (res.data && Object.keys(res.data).length > 0) {
                    setData({
                        ...fakeProgressData,
                        ...res.data
                    });
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <MemberLayout title="My Progress">
            <div className="min-vh-100 bg-light" style={{ width: "73vw", padding: "30px" }}>

                <div
                    className="p-5 mb-4 text-white rounded-4"
                    style={{ background: "linear-gradient(90deg,#1e3c72,#2a9d8f)" }}
                >
                    <div className="d-flex align-items-center mb-2">
                        <i className="fa-solid fa-award fs-2 me-3"></i>
                        <h3 className="fw-bold mb-0">Amazing Progress</h3>
                    </div>

                    <p className="mb-2 fs-5">
                        You're {data.progress}% towards your goals this month
                    </p>

                    <div className="progress" style={{ height: "10px" }}>
                        <div
                            className="progress-bar bg-light"
                            style={{ width: `${data.progress}%` }}
                        />
                    </div>
                </div>



                <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                    <h5 className="fw-bold mb-1">Weight Progress</h5>
                    <p className="text-muted mb-3">Your weight journey over time</p>

                    <ResponsiveContainer width="100%" height={280}>
                        <LineChart data={data.weightChart}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="weight"
                                stroke="#1e3a8a"
                                strokeWidth={3}
                                dot={{ r: 6, fill: "#14b8a6" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-md-4">
                        <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                            <p className="text-muted mt-2 mb-1">Starting Weight</p>
                            <h4 className="fw-bold">{data.startWeight} lbs</h4>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                            <p className="text-muted mt-2 mb-1">Current Weight</p>
                            <h4 className="fw-bold">{data.currentWeight} lbs</h4>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-success-subtle p-4 rounded-4 shadow-sm text-center h-100">
                            <p className="text-muted mt-2 mb-1">Total Loss</p>
                            <h4 className="fw-bold">{data.totalLoss} lbs</h4>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                    <div className="d-flex align-items-center mb-1">
                        <i className="fa-solid fa-calendar-check text-warning me-2"></i>
                        <h5 className="fw-bold mb-0">Attendance Progress</h5>
                    </div>

                    <p className="text-muted mb-3">Your consistency over time</p>

                    <ResponsiveContainer width="100%" height={260}>
                        <LineChart data={data.attendance}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="sessions"
                                stroke="#f97316"
                                strokeWidth={3}
                                dot={{ r: 6, fill: "#1e3a8a" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="alert alert-warning mt-3 mb-0 rounded-3">
                        <strong>Keep it up!</strong> You’ve maintained an excellent attendance streak.
                        Consistency is key to reaching your fitness goals.
                    </div>
                </div>

                <div
                    className="p-4 rounded-4 shadow-sm mb-4"
                    style={{ backgroundColor: "#faf5ff" }}
                >
                    <h5 className="fw-bold mb-3">
                        Recent Achievements
                        <i className="fa-solid fa-trophy ms-2 text-warning"></i>
                    </h5>

                    <div className="row g-3">
                        {data.achievements.map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="bg-white p-3 rounded-4 shadow-sm h-100">
                                    <div
                                        className={`d-flex align-items-center justify-content-center rounded-circle mb-3 bg-${item.color}-subtle`}
                                        style={{ width: "45px", height: "45px" }}
                                    >
                                        <i className={`fa-solid ${item.icon} text-${item.color}`}></i>
                                    </div>

                                    <h6 className="fw-bold mb-1">{item.title}</h6>
                                    <p className="text-muted mb-0 small">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </MemberLayout>
    );
}
