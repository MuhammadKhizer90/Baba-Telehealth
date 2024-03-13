import styles from "./BookPage.module.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Questions from "../../Components/questions/Questiom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BookPage() {
  const params = useParams();
  const userID = params.id;

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../../db.json");
        const data = response.data;
        // console.log(data, "fetched data");
        const filteredData = data.find(item => item.id === parseInt(userID));
        // console.log(filteredData, "filtered data");
        setUserData(filteredData); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchData();
  }, [userID]);
  

  // console.log(userData,"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"); 

  return (
    <div className={styles["booking-section"]}>
      {userData && (
        <div className={styles["booking-section"]}>
      <div className={styles["first-main-container"]}>
        <div className={styles["content-side-container"]}>
          <div className={styles["dr-details"]}>
            <div className={styles["about-dr-details"]}>
              <div className={styles["dr-profile"]}>
                <img
                  src="https://www.babatelehealth.com/api/data/pictures/doctorExample.png"
                  alt=""
                  className={styles["profile"]}
                />
              </div>
               
              <div className={styles["about-dr"]}>
                <p className={styles["name-title"]}>{userData.name}</p>
                <p className={styles["type-title"]}>Primary Care,Baba Hubs {userData.education}</p>
                <div className={styles["visit-price-buttons"]}>
                  <div className={styles["in-person-visit"]}>
                    <img
                      src=" https://www.babatelehealth.com/images/inPerson.png"
                      alt=""
                      className={styles["visit-btn-icon"]}
                    />

                    <p className={styles["visit-btn-text"]}>
                     {userData.personPrice}
                      
                    </p>
                  </div>
                  <div className={styles["in-video-visit"]}>
                    <img
                      src=" https://www.babatelehealth.com/images/videoChat.png"
                      alt=""
                      className={styles["visit-btn-icon"]}
                    />
                    <p className={styles["visit-btn-text"]}>
                    {userData.videoVisit}
                     
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
            <hr className={styles["bottom-line"]} />
          </div>
          <div className={styles["profile-second-container"]}>
            <div className={styles["profile-second"]}>
              <div className={styles["profile-second-recomended"]}>
                <div className={styles["svg-logo"]}>
                  <img
                    src="https://www.babatelehealth.com/images/done.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className={styles["recomended-text"]}>
                    Highly recommended
                  </p>
                  <p className={styles["text-2"]}>
                    100% of patients gave this doctors 5 stars
                  </p>
                </div>
              </div>
              <div className={styles["profile-second-recomended"]}>
                <div className={styles["svg-logo"]}>
                  <img
                    src="https://www.babatelehealth.com/images/clock.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className={styles["recomended-text"]}>
                    Excellent wait time
                  </p>
                  <p className={styles["text-2"]}>
                    92% of patients waited less then 30 minutes
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["profile-second-recomended"]}>
              <div className={styles["svg-logo"]}>
                <img
                  src="https://www.babatelehealth.com/images/lamp.svg"
                  alt=""
                />
              </div>
              <div>
                <p className={styles["recomended-text"]}>
                  New patients appointment
                </p>
                <p className={styles["text-2"]}>
                  appointments available for new patients on Baba Telehealth
                </p>
              </div>
            </div>
          </div>
          <div className={styles["rating-section"]}>
            <div className={styles["rating-main-container"]}>
              <div className={styles["star-side"]}>
                <p className={styles["rating-title"]}>Overall rating</p>
                <p className={styles["rating-number"]}>1.00</p>
                <div className={styles["stars-div"]}>
                  <Box>
                    <Rating name="read-only" value="1" readOnly />
                  </Box>
                </div>
                <p className={styles["reviews-text"]}>6 reviews</p>
              </div>
              <div className={styles["content-side"]}>
                <p className={styles["content-review-txt"]}>Recent reviews</p>
                <p className={styles["content-text"]}>
                  Knowledgable and got diagnosed and treated on the spot.
                  Consultation was quick and easy
                </p>
                <p className={styles["content-date"]}>
                  Flory Emakpose 02/02/2024{" "}
                  <img
                    src="https://www.babatelehealth.com/images/videoChat.png"
                    alt=""
                    className={styles["video-icon-svg"]}
                  />
                  <span className={styles["text-spn"]}>Video Visit</span>
                </p>
                <button className={styles["reviews-btn"]}>
                  Read All Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["booking-side-container"]}>
          <p className={styles["booking-side-title"]}>Book an appointment</p>

          <div className={styles["booking"]}>
            <label htmlFor="" className={styles["label"]}>
              Choose the type of appointment
            </label>
            <div className={styles["option-select"]}>
              <div className={styles["appointment-btns"]}>
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  className={styles["option-selection"]}
                />
                <label htmlFor="" className={styles["gender-title"]}>
                  In person
                </label>
              </div>

              <div className={styles["appointment-btns"]}>
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  className={styles["option-selection"]}
                />
                <label htmlFor="" className={styles["gender-title"]}>
                  Video visit
                </label>
              </div>
            </div>
          </div>
          <div className={styles["appointment-time-section"]}>
            <div className={styles["calender-for-appointment"]}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={[
                    "DatePicker",
                    "MobileDatePicker",
                    "DesktopDatePicker",
                    "StaticDatePicker",
                  ]}
                >
                  <DemoItem
                    label="Select an available time"
                    className={styles["calender-picker-title"]}
                  >
                    <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className={styles["date-submit-button"]}>
             <button className={styles["date-submit-btn"]}>
               Continue Booking
             </button>
          </div>
        </div>
      </div>
      <div className={styles["second-main-container"]}>
        <div className={styles["second-main-heading"]}>
          <img
            src="https://www.babatelehealth.com/images/aboutContent.svg"
            alt=""
            className={styles["second-main-img"]}
          />
          <p className={styles["second-main-heading-text"]}>
            About Dr. {userData.name}
          </p>
        </div>
        <div className={styles["location-container"]}>
          <p className={styles["location-title"]}>Clinic location</p>
          <div className={styles["location-content-container"]}>
            <img
              src="https://www.babatelehealth.com/images/videoIconAbout.svg"
              alt=""
              className={styles["location-image"]}
            />
            <p className={styles["location-text"]}>
              Dr. {userData.name}, MD also offers online video visits for patients
            </p>
          </div>
        </div>
      </div>
      <div className={styles["third-main-container"]}>
        <div className={styles["third-main-heading"]}>
          <p className={styles["education-title"]}>Education and background</p>
        </div>
        <div className={styles["education-cards-section"]}>
          <div className={styles["education-card-1"]}>
            <p className={styles["card-title-1"]}>Specialities</p>
            <p className={styles["card-title-2"]}>Primary care</p>
            <div className={styles["card-image"]}>
              <img
                src="https://www.babatelehealth.com/images/medal.svg"
                alt=""
              />
            </div>
          </div>
          <div className={styles["education-card-1"]}>
            <p className={styles["card-title-1"]}>Practice Names</p>
            <p className={styles["card-title-2"]}>{userData.name}</p>
            <div className={styles["card-image"]}>
              <img
                src="https://www.babatelehealth.com/images/practice.svg"
                alt=""
              />
            </div>
          </div>
          <div className={styles["education-card-1"]}>
            <p className={styles["card-title-1"]}>Hospital affiliations</p>
            <p className={styles["card-title-2"]}>{userData.name}</p>
            <div className={styles["card-image"]}>
              <img
                src="https://www.babatelehealth.com/images/hospitalEdu.svg"
                alt=""
              />
            </div>
          </div>
          <div className={styles["education-card-1"]}>
            <p className={styles["card-title-1"]}>Experience</p>
            <p className={styles["card-title-2"]}>{userData.experienceTitle}</p>
            <div className={styles["card-image"]}>
              <img
                src="https://www.babatelehealth.com/images/quality.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles["training-card"]}>
          <div className={styles["title-icon"]}>
            <img
              src="https://www.babatelehealth.com/images/eduCap.svg"
              alt=""
            />
            <p className={styles["training-title"]}>Education and training</p>
          </div>
          <p className={styles["training-education"]}>{userData.education}</p>
        </div>
        <div className={styles["nlp-language-cards"]}>
          <div className={styles["language-spoken"]}>
            <div className={styles["language-card-contents"]}>
              <p className={styles["language-card-text"]}>Languages Spoken</p>
              <p className={styles["language-card-text1"]}>Urhobo</p>
              <p className={styles["language-card-text2"]}>Nigerian Pidgin</p>
            </div>
            <div className={styles["language-card-svg"]}>
              <img
                src="https://www.babatelehealth.com/images/language.svg"
                alt=""
              />
            </div>
          </div>
          <div className={styles["language-spoken"]}>
            <div className={styles["language-card-contents"]}>
              <p className={styles["language-card-text"]}>NPI Number</p>
              <p className={styles["language-card-text1"]}>111111</p>
              <p className={styles["language-card-text2"]}></p>
            </div>
            <div className={styles["language-card-svg2"]}>
              <img
                src="https://www.babatelehealth.com/images/eduNumber.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["complete-reviews-section"]}>
        <div className={styles["review-container-1"]}>
          <div className={styles["Patient-reviews"]}>
            <p className={styles["Patient-reviews-title"]}>Patient reviews</p>
            <div className={styles["review-section-buttons"]}>
              <button className={styles["review-sec-btn"]}>
                <img
                  src="https://www.babatelehealth.com/images/arrowLeft1.png"
                  alt=""
                />
              </button>
              <button className={styles["review-sec-btn"]}>
                <img
                  src="https://www.babatelehealth.com/images/arrowRight1.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className={styles["review-card"]}>
            <img
              src="https://www.babatelehealth.com/static/media/defaultProfile.55985f988115c0d2a6e6.png"
              alt=""
              className={styles["review-card-img"]}
            />
            <div>
              <p className={styles["Flory-Emakpose"]}>Flory Emakpose</p>
              <p className={styles["date-reviews"]}>02/02/2024</p>
            </div>
          </div>
        </div>
        <div className={styles["review-container-2"]}>
          <div>
            <Box>
              <Rating name="read-only" value="5" readOnly />
            </Box>
          </div>
          <div>
            <p className={styles["review-container-2-text"]}>
              Knowledgable and got diagnosed and treated on the spot.
              Consultation was quick and easy
            </p>
          </div>
          <div>
            <img
              src="https://www.babatelehealth.com/images/videoChat.png"
              alt=""
              className={styles["review-video-svg"]}
            />
            <p className={styles["review-icon-text"]}>Video Visit</p>
          </div>
        </div>
      </div>
      </div>
        )}
      <div className={styles["frequent-questions"]}>
        <div className={styles["frequent-question-heading"]}>
          <p className={styles["frequent-question-heading-text"]}>
            Frequently asked questions
          </p>
        </div>
        <div className={styles["frequently-questions-container"]}>
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default BookPage;
