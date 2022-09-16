import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Pages/Register";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

