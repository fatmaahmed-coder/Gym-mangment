import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import MemberLayout from '../../layouts/MemberLayout'



const fakeSessions = [
    {
        id: 1,
        title: "Yoga Flow",
        trainer: "Emma Wilson",
        date: "Dec 29, 2024",
        time: "8:00 AM",
        duration: "60 min",
        spots: 5,
        type: "Yoga Flow",
    },
    {
        id: 2,
        title: "HIIT Training",
        trainer: "Sarah Martinez",
        date: "Dec 29, 2024",
        time: "6:00 PM",
        duration: "45 min",
        spots: 3,
        type: "HIIT Training",
    },
    {
        id: 3,
        title: "Strength Training",
        trainer: "Mike Johnson",
        date: "Dec 30, 2024",
        time: "5:30 PM",
        duration: "60 min",
        spots: 8,
        type: "Strength Training",
    },
    {
        id: 4,
        title: "Pilates Core",
        trainer: "Lisa Chen",
        date: "Dec 30, 2024",
        time: "9:00 AM",
        duration: "50 min",
        spots: 4,
        type: "Pilates Core",
    },
];

const sessionTypes = [
    "All Sessions",
    "Yoga Flow",
    "HIIT Training",
    "Strength Training",
    "Pilates Core",
    "Boxing Bootcamp",
    "Spin Class",
];

export default function BookSession() {
    const [sessions, setSessions] = useState([]);
    const [activeType, setActiveType] = useState("All Sessions");
    const [bookedSessions, setBookedSessions] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/sessions")
            .then((res) => {
                // ✅ نتحقق إن الداتا Array وفيها عناصر
                if (Array.isArray(res.data) && res.data.length > 0) {
                    setSessions(res.data);
                } else {
                    setSessions(fakeSessions);
                }
            })
            .catch(() => {
                // ❌ أي Error → Fake Data
                setSessions(fakeSessions);
            });
    }, []);

    const handleBook = (id) => {
        setBookedSessions((prev) =>
            prev.includes(id) ? prev : [...prev, id]
        );
    };

    const filteredSessions =
        activeType === "All Sessions"
            ? sessions
            : sessions.filter((s) => s.type === activeType);

    return (
        <MemberLayout title="GymFlow">
            <div className="min-vh-100 bg-light" style={{ width: "73vw", padding: "30px" }}>


                <h4 className="fw-bold mb-1">Book a Session</h4>
                <p className="text-muted mb-4">
                    Choose from available training sessions
                </p>

                {/* Filter */}
                <div className="card p-3 mb-4 border-0 shadow-none">
                    <h5 className="card-title mb-3">Session Types</h5>
                    <div className="d-flex flex-wrap gap-2">
                        {sessionTypes.map((type) => (
                            <button
                                key={type}
                                className={`btn btn-sm rounded-pill ${activeType === type ? "btn-primary" : "btn-outline-secondary"
                                    }`}
                                onClick={() => setActiveType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Cards */}
                <div className="row g-4">
                    {filteredSessions.map((session) => {
                        const isBooked = bookedSessions.includes(session.id);

                        return (
                            <div className="col-md-6" key={session.id}>
                                <div className="card h-100 border-0 shadow-sm rounded-4">
                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex justify-content-between mb-2">
                                            <h6 className="fw-bold mb-0">{session.title}</h6>
                                            <span className="badge bg-success-subtle text-success">
                                                {session.spots} spots
                                            </span>
                                        </div>

                                        <div className="text-muted small mb-3 d-flex align-items-center gap-2">
                                            <FaUser /> {session.trainer}
                                        </div>

                                        <div className="text-muted small mb-2">
                                            <FaCalendarAlt className="me-2" />
                                            {session.date}
                                        </div>

                                        <div className="text-muted small mb-4">
                                            <FaClock className="me-2" />
                                            {session.time} • {session.duration}
                                        </div>

                                        <button
                                            className={`btn mt-auto w-100 rounded-3 ${isBooked ? "btn-success" : "btn-primary"
                                                }`}
                                            disabled={isBooked}
                                            onClick={() => handleBook(session.id)}
                                        >
                                            {isBooked ? "Booked" : "Book This Session"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <div className="card p-4 mt-5 border-0" style={{ backgroundColor: "#d1e2f5" }}>
                    <h5 className="card-title mb-3">Booking Tips</h5>
                    <ul className="mb-0">
                        <li>Book early for popular sessions as spots fill up quickly</li>
                        <li>You can cancel up to 2 hours before the session starts</li>
                        <li>Arrive 10 minutes early for your first session</li>
                        <li>Bring a water bottle and towel</li>
                    </ul>
                </div>

            </div>
        </MemberLayout>
    );
}
