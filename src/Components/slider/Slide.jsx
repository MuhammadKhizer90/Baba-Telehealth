import { useRef,useEffect,useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftSvg from "../../assets/left green.svg"
import RightSvg from "../../assets/right green.svg"
import "./slider.scss"
import BtnIcon from "../../assets/login icon.svg"
import SlideImg1 from "../../assets/ambulance.svg"
import SlideImg2 from "../../assets/hand-holding-heart.svg"
import SlideImg3 from "../../assets/Mask group (4).svg"
import SlideImg4 from "../../assets/Mask group (3).svg"
import SlideImg5 from "../../assets/Mask group (1).svg"
import SlideImg6 from "../../assets/mind-share.svg"
import { Link } from "react-router-dom";
const CardSlider = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
  className: "slider variable-width",
      dots:false,
      infinite: true,
      centerMode: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  const [selectedButton, setSelectedButton] = useState('slide-btn');
  const buttonRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setSelectedButton(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };


  return (
    <div className="slider-section">
      <div className="heading-section-slider">
        <p className="main-heading-slider">
        Medical specialties
        </p>
        <p className="main-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem</p>
        <p className="main-para-text2">ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta.</p>
      </div>
        <div className="slider-action-btns">
        <button className={selectedButton === 'slide-btn' ? 'slide-btn selected' : 'slide-btn'}
                     onClick={() => {handleButtonClick('slide-btn');handlePrev(); }}>
                    <img src={LeftSvg} alt="" className="backwaard-btn"/>
          </button>
          <button className={selectedButton === 'slide-btn2' ? 'slide-btn2 selected' : 'slide-btn2'}
                     onClick={() => {handleButtonClick('slide-btn2');handleNext(); }}>
            <img src={RightSvg} alt="" className="backwaard-btn"/>
          </button>
        </div>
        <div className="Slider-cards">
          <Link to="/Search">
          <Slider ref={sliderRef} {...settings} className="functional-slider">
            <div className="slider-card-sm">
              
              <h5 className="slide-title">Urgent care</h5>
              <img src={SlideImg1} alt="" className="slide-img" />
              <p className="slide-text">
              Lorem ipsum dolor amt, consectetur adipiscing.
              </p>
            </div>
           
              <div className="slider-card-sm">
                <h5 className="slide-title">Primary care</h5>
                <img src={SlideImg2} alt="" className="slide-img" />
                <p className="slide-text">
                Lorem ipsum dolor amt, consectetur adipiscing.
                </p>
              </div>

            <div className="slider-card-sm">
              
              <h5 className="slide-title">Gynaecology</h5>
              <img src={SlideImg3} alt="" className="slide-img" />
              <p className="slide-text">
              Lorem ipsum dolor amt, consectetur adipiscing.
              </p>
            </div>

            <div className="slider-card-sm">
             
              <h5 className="slide-title"> Chronic diseases</h5>
               <img src={SlideImg4} alt="" className="slide-img" />
              <p className="slide-text">
              Lorem ipsum dolor amt, consectetur adipiscing.
              </p>
            </div>

            <div className="slider-card-sm">
             
              <h5 className="slide-title"> Dermatologist</h5>
               <img src={SlideImg5} alt="" className="slide-img" />
              <p className="slide-text">
              Lorem ipsum dolor amt, consectetur adipiscing.
              </p>
            </div>

            <div className="slider-card-sm">
              
              <h5 className="slide-title">Psychiatry</h5>
              <img src={SlideImg6} alt="" className="slide-img" />
              <p className="slide-text">
              Lorem ipsum dolor amt, consectetur adipiscing.
              </p>
            </div>
          </Slider>
          </Link>
        </div>
        <button className="medical-button">All medical specialties <span className="medical-btn-span">
              <img src={BtnIcon} alt="icon" className="medical-icon"/>
            </span></button>
      </div>
  );
};

export default CardSlider;
