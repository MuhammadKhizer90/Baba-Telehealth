import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About us/AboutUs";
import Page from "./Pages/404 Page/404Page";
import Footer from "./Components/Footer/Footer";
import SearchPage from "./Pages/Search Page/SearchPage";
import Login from "./Pages/login/Login";
import ContactUs from "./Pages/Contact us/ContactUs";
import Signup from "./Pages/signup/Signup";
import Chat from "./Pages/Chat24/7/Chat";
import Form from "./Pages/Doctor Signup/DoctorSignup";
import BookPage from "./Pages/Booking Page/BookPage";
import UrgentCarePage from "./Pages/Urgent Care page/UrgentCarePage";
import PrivacyPolicy from "./Pages/Privacy Policy/PrivacyPolicy";
import TermsAndUse from "./Pages/Terms of Use/TermsOfUse";
import MenHealth from "./Pages/Men Health/MenHealth";
import WomenHealth from "./Pages/Women Health/WomenHealth";
import STIs from "./Pages/STIs/STIs";
import ProtectedRoute from './protected routes/ProtectedRoutes';
import { useSelector } from "react-redux";
function App() {
  return (
    <div className="outletcenter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/drsignup" element={<Form />} />
        <Route path="/bookpage/:id" element={<BookPage />} />
        <Route path="/urgentcare" element={<UrgentCarePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsanduse" element={<TermsAndUse />} />

        <Route path='/menhealth' element={<ProtectedRoute element={<MenHealth />} restrictedRoutes={['/menhealth', '/womenhealth', '/stis']} />} />
        <Route path='/womenhealth' element={<ProtectedRoute element={<WomenHealth />} restrictedRoutes={['/menhealth', '/womenhealth', '/stis']} />} />
        <Route path='/stis' element={<ProtectedRoute element={<STIs />} restrictedRoutes={['/menhealth', '/womenhealth', '/stis']} />} />
        
        <Route path="*" element={<Page />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;