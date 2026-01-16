import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import axios from "axios";
import MemberLayout from '../../layouts/MemberLayout'


export default function MySessions() {
    const [sessions, setSessions] = useState({
        upcoming: [
            { id: 1, name: "HIIT Training", trainer: "Sarah Martinez", time: "6:00 PM", date: "Dec 26, 2024", status: "Confirmed" },
            { id: 2, name: "Yoga Flow", trainer: "Emma Wilson", time: "8:00 AM", date: "Dec 27, 2024", status: "Confirmed" },
            { id: 3, name: "Strength Training", trainer: "Mike Johnson", time: "5:30 PM", date: "Dec 28, 2024", status: "Confirmed" },
        ],
        past: [
            { id: 4, name: "Cardio Blast", trainer: "Tom Anderson", time: "7:00 PM", date: "Dec 23, 2024", status: "Completed" },
            { id: 5, name: "Pilates Core", trainer: "Lisa Chen", time: "9:00 AM", date: "Dec 21, 2024", status: "Completed" },
            { id: 6, name: "Boxing Bootcamp", trainer: "Marcus Lee", time: "6:30 PM", date: "Dec 20, 2024", status: "Completed" },
        ],
    });

    useEffect(() => {
        axios.get("/api/sessions")
            .then((res) => {
                if (res.data && Object.keys(res.data).length > 0) {
                    setSessions(res.data);
                }
            })
            .catch(() => {
            });
    }, []);

    const totalSessions = (sessions?.upcoming?.length || 0) + (sessions?.past?.length || 0);

   


    return (
        <MemberLayout title="GymFlow">
            <div className="min-vh-100 bg-light" style={{ width: "73vw", padding: "30px" }}>

            
                    <h3 className="mb-3">My Sessions</h3>
                    <p className="text-muted mb-4">View and manage your booked sessions</p>

                    <div className="mb-4 p-3 shadow-sm rounded-4 bg-white">
                        <h5 className="mb-3"><FaCalendarAlt className="me-2" />Upcoming Sessions</h5>
                        {sessions?.upcoming?.length > 0 ? sessions.upcoming.map((s) => (
                            <div key={s.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                                <div>
                                    <strong>{s.name}</strong><br />
                                    <small><FaUser className="me-1" /> {s.trainer} • {s.time}</small><br />
                                    <small className="text-muted">{s.date}</small>
                                </div>
                                <div className="text-end">
                                    <span className="badge bg-success mb-2">{s.status}</span><br />
                                    <button className="btn btn-sm btn-outline-danger">Cancel</button>
                                </div>
                            </div>
                        )) : <p className="text-muted">No upcoming sessions</p>}
                    </div>

                    <div className="mb-4 p-3 shadow-sm rounded-4 bg-white">
                        <h5 className="mb-3"><FaCalendarAlt className="me-2" />Past Sessions</h5>
                        {sessions?.past?.length > 0 ? sessions.past.map((s) => (
                            <div key={s.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                                <div>
                                    <strong>{s.name}</strong><br />
                                    <small><FaUser className="me-1" /> {s.trainer} • {s.time}</small><br />
                                    <small className="text-muted">{s.date}</small>
                                </div>
                                <div className="text-end">
                                    <span className="badge bg-secondary mb-2">{s.status}</span><br />
                                    <button className="btn btn-sm btn-outline-primary">Book Again</button>
                                </div>
                            </div>
                        )) : <p className="text-muted">No past sessions</p>}
                    </div>

                    <div className="d-flex gap-3">
                        <div className="flex-fill p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#dceefc" }}>
                            <h6>Total Sessions</h6>
                            <h4>{totalSessions}</h4>
                        </div>
                        <div className="flex-fill p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#d4f7eb" }}>
                            <h6>Upcoming</h6>
                            <h4>{sessions?.upcoming?.length || 0}</h4>
                        </div>
                        <div className="flex-fill p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#fff3e0" }}>
                            <h6>Completed</h6>
                            <h4>{sessions?.past?.length || 0}</h4>
                        </div>
                    </div>
                
            </div>
        </MemberLayout>
    );
}
