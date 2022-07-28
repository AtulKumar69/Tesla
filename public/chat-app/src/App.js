import { Route, Routes } from "react-router-dom";
import "./App.css";
import SetAvatar from "./pages/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Rgister from "./pages/Rgister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Chat/>} />
        <Route path="/register" element={<Rgister />} />
        <Route path="/setavatar" element={<SetAvatar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setavatar" element={<SetAvatar/>} />
      </Routes>
    </div>
  );
}

export default App;
