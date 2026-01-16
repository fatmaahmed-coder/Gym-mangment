
import MemberLayout from '../../layouts/MemberLayout'
import Membership from './Membership'
import MemberSessions from './MemberSessions'
import BookSession from './BookSession'
import Progress from './Progress'
import Profile from './Profile'
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";



import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const fakeData = {
  name: "Alex Johnson",
  plan: { name: "Premium", duration: "Annual" },
  sessionsAttended: 47,
  nextSession: { name: "HIIT Training", date: "Tomorrow at 6:00 PM" },
  membershipExpiry: 45
};

const fakeWeeklyData = [
  { day: "Mon", sessions: 1 },
  { day: "Tue", sessions: 2 },
  { day: "Wed", sessions: 1 },
  { day: "Thu", sessions: 0 },
  { day: "Fri", sessions: 2 },
  { day: "Sat", sessions: 1 },
  { day: "Sun", sessions: 1 }
];

const fakeMonthlyData = [
  { month: "Jul", sessions: 12 },
  { month: "Aug", sessions: 15 },
  { month: "Sep", sessions: 18 },
  { month: "Oct", sessions: 14 },
  { month: "Nov", sessions: 21 },
  { month: "Dec", sessions: 16 }
];

export default function MemberDashboard() {
  const [memberData, setMemberData] = useState(fakeData);
  const [weeklyData, setWeeklyData] = useState(fakeWeeklyData);
  const [monthlyData, setMonthlyData] = useState(fakeMonthlyData);

  useEffect(() => {
    axios.get("http://localhost:8000/api/member/dashboard")
      .then(res => {
        const data = res.data;

        if (data && Object.keys(data).length > 0) {
          setMemberData(data);
          setWeeklyData(data.weeklySessions || fakeWeeklyData);
          setMonthlyData(data.monthlySessions || fakeMonthlyData);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []);





  return (
    <MemberLayout title="GymFlow">
      <div className="min-vh-100 bg-light" style={{ width: "73vw", padding: "30px" }}>
        <div className="p-5 mb-4 text-white rounded-4" style={{ background: "linear-gradient(90deg, #1e3c72, #2a9d8f)" }}>
          <h2 className="fw-bold">Welcome back, {memberData.name}! 👋</h2>
          <p className="mb-0 fs-5">Ready to crush your fitness goals today?</p>
        </div>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100 ">
              <i className="fas fa-wallet" style={{ color: '#5d94e7', fontSize: '36px' }}></i>

              <p className="text-muted mb-1">Active Plan</p>
              <h5 className="fw-bold">
                {memberData.plan.name} <br /> {memberData.plan.duration}
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
              <i className="fas fa-chart-line" style={{ color: '#88c4d0', fontSize: '32px' }}></i>

              <p className="text-muted mb-1">Sessions Attended</p>
              <h3 className="fw-bold">{memberData.sessionsAttended}</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
              <i className="fa-solid fa-calendar" style={{ color: '#ffcc99', fontSize: '32px' }}></i>
              <p className="text-muted mb-1">Upcoming Session</p>
              <h6 className="fw-bold">{memberData.nextSession.name}</h6>
              <small className="text-muted">{memberData.nextSession.date}</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
              <i className="fa-solid fa-medal" style={{ color: '#d9b3ff', fontSize: '32px' }}></i>
              <p className="text-muted mb-1">Membership Expiry</p>
              <h4 className="fw-bold">{memberData.membershipExpiry} days</h4>
            </div>
          </div>
        </div>





        <div className="row g-4 mt-3">

          <div className="col-md-6">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
              <h5 className="fw-bold mb-1">Weekly Activity</h5>
              <p className="text-muted mb-3">Your workout sessions this week</p>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sessions" radius={[8, 8, 0, 0]} fill="#14b8a6" />
                </BarChart>
              </ResponsiveContainer>

              <div className="alert alert-success mt-3 mb-0 rounded-3">
                🔥 You've completed <strong>{weeklyData.reduce((sum, item) => sum + item.sessions, 0)}</strong> sessions this week!
              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
              <h5 className="fw-bold mb-1">Monthly Workout Consistency</h5>
              <p className="text-muted mb-3">Track your attendance over time</p>

              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sessions"
                    stroke="#1e3a8a"
                    strokeWidth={3}
                    dot={{ r: 6, fill: "#14b8a6" }}
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="alert alert-primary mt-3 mb-0 rounded-3">
                📈 Your consistency is improving! Keep up the great work!
              </div>
            </div>
          </div>

        </div>






        <div className="row g-4 mt-3">

          {/* Book a Session */}
          <div className="col-md-6">
            <Link to="/booksession" className="text-decoration-none">
              <div className="card text-white h-100 rounded-4" style={{ background: "linear-gradient(90deg, #1e3c72, #2a9d8f)" }}>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="fw-bold mb-1">Book a Session</h5>
                    <p className="mb-0 text-white-50">Schedule your next workout</p>
                  </div>
                  <ArrowRight size={28} className="text-white" />
                </div>
              </div>
            </Link>
          </div>

          {/* View My Plan */}
          <div className="col-md-6">
            <Link to="/membership" className="text-decoration-none">
              <div className="card h-100 rounded-4 border-primary">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="fw-bold mb-1">View My Plan</h5>
                    <p className="mb-0 text-muted">Check membership details</p>
                  </div>
                  <ArrowRight size={28} className="text-primary" />
                </div>
              </div>
            </Link>
          </div>

        </div>


      </div>


    </MemberLayout>
  );
}
