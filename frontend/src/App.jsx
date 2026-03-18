import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AskAI from "./pages/AskAI";
import UploadPDF from "./pages/UploadPDF";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GenerateMCQ from "./pages/GenerateMCQ";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navbar />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ask"
            element={
              <ProtectedRoute>
                <AskAI />
              </ProtectedRoute>
            }
          />

          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadPDF />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mcq"
            element={
              <ProtectedRoute>
                <GenerateMCQ />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;