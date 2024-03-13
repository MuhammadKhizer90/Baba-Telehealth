import styles from "./DoctorCards.module.scss"
import { GoClockFill } from "react-icons/go";
import { TbBulbFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaPersonArrowDownToLine } from "react-icons/fa6";
import { MdOutlinePhonelink } from "react-icons/md";
import DrSvgIcon from "../../assets/icons8-doctor-96.png";
import { Link } from "react-router-dom";
function DoctorCards(data) {
  
  // console.log('card',data.id)
  return (
    <div>
          <div className={styles["main-cards-container"]}>
        <div className={styles["doctor-card-1"]}>
          <img
            src={DrSvgIcon}
            alt="profile 1"
            className={styles["doctor-profile"]}
          />
          <div className={styles["doctor-details"]}>
            <p className={styles["doctor-title"]}>{data.name}</p>
            <p className={styles["education"]}>{data.education}</p>
            <div className={styles["visit-price-buttons"]}>
              <div className={styles["in-person-visit"]}>
                <FaPersonArrowDownToLine className={styles["visit-btn-icon"]} />

                <p className={styles["visit-btn-text"]}>
                  {data.personPrice}
                </p>
              </div>
              <div className={styles["in-video-visit"]}>
                <MdOutlinePhonelink className={styles["visit-btn-icon"]} />
                <p className={styles["visit-btn-text"]}>
                  {data.videoVisit}
                </p>
              </div>
            </div>
            <div className={styles["offers"]}>
              <div className={styles["time"]}>
                <div>
                  <GoClockFill className={styles["clock-icon"]} />
                </div>
                <div className={styles["time-title"]}>
                  <p className={styles["time-div-heading"]}>{data.timeTitle}</p>
                  <p className={styles["time-div-text"]}>{data.timeTitle2}</p>
                </div>
              </div>
              <div className={styles["experience"]}>
                <div>
                  <TbBulbFilled className={styles["bulb-icon"]} />
                </div>
                <div className={styles["experience-title"]}>
                  <p className={styles["experience-div-heading"]}>{data.experienceTitle}</p>
                  <p className={styles["experience-div-text"]}>{data.experienceTitle2}</p>
                </div>
              </div>
              <div className={styles["rating"]}>
                <div>
                  <TiTick className={styles["tick-icon"]} />
                </div>
                <div className={styles["rating-title"]}>
                  <p className={styles["rating-div-heading"]}>{data.ratingTitle1}</p>
                  <p className={styles["rating-div-text"]}>
                  {data.ratingTitle2}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["dr-card-buttons"]}>
            <button className={styles["dr-card-btn-1"]}>
              Video Consultation
            </button>
            <Link to={`/bookpage/${data.id}`} className={styles["dr-card-btn-2"]}>
        Book Appointment
      </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorCards