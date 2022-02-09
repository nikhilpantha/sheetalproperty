import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import RequirementForm from "./pages/RequirementForm";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Header />
        <div className="mx-auto max-w-[1440px] bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requirementForm" element={<RequirementForm />} />
            <Route path="/singleProduct" element={<SingleProduct />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
