import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Portfolio from "./components/Portfolio.jsx";
import BlogPage from "./components/BlogPage.jsx";
import BlogDetail from "./components/BlogDetails.jsx";
import ProjectUpdates from "./components/ProjectUpdates.jsx";
import Read from "./components/Read.jsx";
import Write from "./components/Write.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/project-updates" element={<ProjectUpdates />} />
            <Route path="/read" element={<Read />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
