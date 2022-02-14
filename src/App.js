import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/header/Header";
import Home from "./pages/Home";
import RequirementForm from "./pages/RequirementForm";
import SingleProduct from "./pages/SingleProduct";
import HomeLone from "./pages/HomeLone";
import PayRentOnline from "./pages/PayRentOnline";
import LegelHepl from "./pages/LegelHepl";
import EmiCalculatorPage from "./pages/EmiCalculatorPage";

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
            <Route path="/homeLone" element={<HomeLone />} />
            <Route path="/payRentOnline" element={<PayRentOnline />} />
            <Route path="/legalHelp" element={<LegelHepl />} />
            <Route path="/emiCalculator" element={<EmiCalculatorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
