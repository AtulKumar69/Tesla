import { Route, Routes } from "react-router-dom";
import "./App.css";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Rgister from "./pages/Rgister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Rgister />} />
        <Route path="/setavatar" element={<SetAvatar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
