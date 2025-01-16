import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Create from "./components/BlogpostForm";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import BlogDetails from "./components/BlogpostDetails";
import NotFound from "./components/NotFound";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
import { useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

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
              path="/"
              element={
                user ? (
                  <Home setShowModal={setShowModal} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route path="/about" element={<Create />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
