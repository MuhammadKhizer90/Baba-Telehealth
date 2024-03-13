import "../feedback Slider/FeedbackSlider.scss";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "../../assets/Map.svg";
import { useState, useEffect } from "react";
import BtnSvgIcon from "../../assets/chevron-down-solid 10 (1).svg";
import BtnSvgIcon2 from "../../assets/chevron-down-solid 10 (2).svg";
import Profile1 from "../../assets/profile 1.svg";
import Profile2 from "../../assets/profile 2.svg";
import StarIcon from "../../assets/stars icons.svg";
const FeedbackSlider = () => {
  const feedbackSliderRef = useRef(null);

  const handlePrevFeed = () => {
    if (feedbackSliderRef.current) {
      feedbackSliderRef.current.slickPrev();
    }
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  };

  const handleNextFeed = () => {
    if (feedbackSliderRef.current) {
      feedbackSliderRef.current.slickNext();
    }
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
  };
  const feedbackSettings = {
    className: "feedback-slider-variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [selectedButton, setSelectedButton] = useState("slide-fb-btn");
  const buttonRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setSelectedButton(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="feedback-slider-section">
      <div className="feedback-functional-slider">
        <Slider
          ref={feedbackSliderRef}
          {...feedbackSettings}
          className="feedback-slick-slider"
        >
          <div>
            <div className="content-of-feedback-slider">
              <div className="main-slider-container">
                <img src={Map} alt="" className="feedback-slider-image" />
                <div className="feedback-message-content">
                  <p className="title-slider-container">Testimonials</p>
                  <p className="slider-heading-text">
                    Our patients love using Baba TeleHealth
                  </p>
                  <p className="slider-para-text">
                    Check out what they’re saying about us!
                  </p>
                  <div className="scards-container">
                    <div className="map-slider-card1">
                      <div className="map-card-main">
                        <div className="map-card-image">
                          <img
                            src={Profile1}
                            alt=""
                            className="profile-image"
                          />
                        </div>
                        <div className="star-title">
                          <p className="map-title">Fatima Odori</p>
                          <img src={StarIcon} alt="" className="map-stars" />
                        </div>
                      </div>
                      <div className="paragraph-container">
                        <p className="map-card-slider-para">Signing up and seeing a doctor was pretty quick and easy. Would recommend it if you’re trying to avoid visiting a doctor in person.</p>
                      </div>
                    </div>

                    <div className="map-slider-card1">
                      <div className="map-card-main">
                        <div className="map-card-image">
                          <img
                            src={Profile2}
                            alt=""
                            className="profile-image"
                          />
                        </div>
                        <div className="star-title">
                          <p className="map-title">Eze Macaulay Olatude</p>
                          <img src={StarIcon} alt="" className="map-stars" />
                        </div>
                      </div>
                      <div className="paragraph-container">
                        <p className="map-card-slider-para">The best telemedicine service available. The doctor I selected was super responsive and took care of my needs immediately.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="content-of-feedback-slider">
              <div className="main-slider-container">
                <img src={Map} alt="" className="feedback-slider-image" />
                <div className="feedback-message-content">
                  <p className="title-slider-container">Testimonials</p>
                  <p className="slider-heading-text">
                    Our patients love using Baba TeleHealth
                  </p>
                  <p className="slider-para-text">
                    Check out what they’re saying about us!
                  </p>

                  <div className="scards-container">
                    <div className="map-slider-card1">
                      <div className="map-card-main">
                        <div className="map-card-image">
                          <img
                            src={Profile1}
                            alt=""
                            className="profile-image"
                          />
                        </div>
                        <div className="star-title">
                          <p className="map-title">Fatima Odori</p>
                          <img src={StarIcon} alt="" className="map-stars" />
                        </div>
                      </div>
                      <div className="paragraph-container">
                        <p className="map-card-slider-para">Signing up and seeing a doctor was pretty quick and easy. Would recommend it if you’re trying to avoid visiting a doctor in person.</p>
                      </div>
                    </div>

                    <div className="map-slider-card1">
                      <div className="map-card-main">
                        <div className="map-card-image">
                          <img
                            src={Profile2}
                            alt=""
                            className="profile-image"
                          />
                        </div>
                        <div className="star-title">
                          <p className="map-title">Eze Macaulay Olatude</p>
                          <img src={StarIcon} alt="" className="map-stars" />
                        </div>
                      </div>
                      <div className="paragraph-container">
                        <p className="map-card-slider-para">The best telemedicine service available. The doctor I selected was super responsive and took care of my needs immediately.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="feedback-slider-btns">
        <button
          className={
            selectedButton === "slide-fb-btn"
              ? "slide-fb-btn selected"
              : "slide-fb-btn"
          }
          onClick={() => {
            handleButtonClick("slide-fb-btn");
            handlePrevFeed();
          }}
        >
          <img src={BtnSvgIcon2} alt="" className="right-svg" />
        </button>
        <button
          className={
            selectedButton === "slide-fb-btn2"
              ? "slide-fb-btn2 selected"
              : "slide-fb-btn2"
          }
          onClick={() => {
            handleButtonClick("slide-fb-btn2");
            handleNextFeed();
          }}
        >
          <img src={BtnSvgIcon} alt="" className="right-svg" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackSlider;
