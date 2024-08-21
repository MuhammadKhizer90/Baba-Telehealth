import HeroSection from '../../Components/Hero Section/HeroSection';
import Appointment from "../../Components/online appointment/OnlineAppointment";
import UrgentCare from "../../Components/Urgent Care/UrgentCare";
import CareButtons from '../../Components/UrgentCareButtons/CareButtons';
import Slider from "../../Components/slider/Slide";
import HowWork from '../../Components/How it works/HowWork';
import StarDoctor from '../../Components/Star Doctors/StarDoctor';
import SingleSlider from "../../Components/feedback Slider/feedbackSlider"
import { useRef } from 'react';
import "./Home.scss";
function Home() {

  const urgentRef = useRef(null);
  const scrollToUrgent = () => {
    urgentRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log("scroll into urgent care...........................")
  };



  return (
    <div className="outlet">
        <HeroSection scrollToUrgent={scrollToUrgent}/>
        <Appointment/>
        <div ref={urgentRef}>
        <UrgentCare />
        </div>
        <CareButtons/>
        <Slider/>
        <HowWork/>
        <StarDoctor/>
        <SingleSlider/>
    </div>
  )
}

export default Home