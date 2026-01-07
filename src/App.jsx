import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Members from "./pages/Admin/Members"
import AddMember from "./pages/Admin/AddMember";
import EditMembers from "./pages/Admin/EditMembers";
import Trainers from "./pages/Admin/Trainers";
import AddTrainer from "./pages/Admin/AddTrainers";
import EditTrainer from "./pages/Admin/EditTrainer"
import Register from "./pages/auth/Register";
import Plans from "./pages/Admin/Plans";
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register/>}/>
        <Route path="/members" element={<Members/>} />
        <Route path="/members/add" element={<AddMember/>}/>
        <Route path="/members/edit" element={<EditMembers/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/trainers/add" element={<AddTrainer/>}/>
        <Route path="/trainers/edit" element={<EditTrainer/>}/>
        <Route path="/plans" element={<Plans/>}/>

        
      </Routes>
      
    </>
  );
}

export default App;
