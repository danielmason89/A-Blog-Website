import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Subscribe from "./pages/Subscribe";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
import { useState } from "react";
import Footer from "./components/Footer";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";

function App() {
  const { user } = useAuthContext();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait">
        <div className="content">
          <Routes location={location} key={location.key}>
            <Route
              path="/dashboard"
              element={
                user ? (
                  <Dashboard setShowModal={setShowModal} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/subscribe"
              element={!user ? <Subscribe /> : <Navigate to="/dashboard" />}
            />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
