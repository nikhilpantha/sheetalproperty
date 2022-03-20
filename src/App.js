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
import LegalHelp from "./pages/LegalHelp";
import EmiCalculatorPage from "./pages/EmiCalculatorPage";
import RateAndTrends from "./pages/RateAndTrends";
import Investment from "./pages/Investment";
import InvestmentExplore from "./pages/InvestmentExplore";
import InvestmentAllProduct from "./pages/InvestmentAllProduct";
import Project from "./pages/Project";
import MyProfile from "./pages/MyProfile";
import PostProperty from "./pages/PostProperty";
import PropertyDemand from "./pages/PropertyDemand";
import FindAgent from "./pages/FindAgent";
import ProductSearch from "./pages/ProductSearch";
import SingleAgent from "./pages/SingleAgent";
import InvestDetails from "./pages/InvestDetails";
import Message from "./pages/Message";

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
            <Route path="/LegalHelp" element={<LegalHelp />} />
            <Route path="/emiCalculator" element={<EmiCalculatorPage />} />
            <Route path="/rateandtrend" element={<RateAndTrends />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/investment/export" element={<InvestmentExplore />} />
            <Route path="/postProperty" element={<PostProperty />} />
            <Route path="/propertyDemand" element={<PropertyDemand />} />
            <Route path="/findAgent" element={<FindAgent />} />
            <Route path="/singleAgent" element={<SingleAgent />} />
            <Route path="/productSearch" element={<ProductSearch />} />
            <Route path="/myProfile/messages" element={<Message />} />
            <Route path="/investDetail" element={<InvestDetails />} />
            <Route path="/project" element={<Project />} />
            <Route
              path="/investment/viewallproduct"
              element={<InvestmentAllProduct />}
            />
            <Route path="/myProfile" element={<MyProfile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
