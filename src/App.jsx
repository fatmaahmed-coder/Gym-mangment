import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Admin/Dashboard";
import Members from "./pages/Admin/Members"
import AddMember from "./pages/Admin/AddMember";
import EditMembers from "./pages/Admin/EditMembers";
import Trainers from "./pages/Admin/Trainers";
import AddTrainer from "./pages/Admin/AddTrainers";
import EditTrainer from "./pages/Admin/EditTrainer"
import Plans from "./pages/Admin/Plans";
import AddPlan from "./pages/Admin/AddPlan";
import EditPlan from "./pages/Admin/EditPlan";
import Session from "./pages/Admin/Session";
import AddSession from "./pages/Admin/AddSession";
import EditSession from "./pages/Admin/EditSession";
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/members" element={<Members/>} />
        <Route path="/members/add" element={<AddMember/>}/>
        <Route path="/members/edit" element={<EditMembers/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/trainers/add" element={<AddTrainer/>}/>
        <Route path="/trainers/edit" element={<EditTrainer/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/plans/add" element={<AddPlan/>}/>
        <Route path="/plans/edit" element={<EditPlan/>}/>
        <Route path="/sessions" element={<Session/>}/>
        <Route path="/sessions/add" element={<AddSession/>}/>
        <Route path="/sessions/edit" element={<EditSession/>}/>


        
      </Routes>
      
    </>
  );
}

export default App;
