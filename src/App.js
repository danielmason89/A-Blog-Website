import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Create from "./components/BlogpostForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogpostDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
