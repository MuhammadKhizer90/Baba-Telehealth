import styles from "../Hero Section/HeroSection.module.scss";
import PlusIcon from "../../assets/Frame 2.svg";
import HealthCare from "../../assets/Best healthcare.svg";
import BtnIcon from "../../assets/login icon.svg";
import HeroSectionImage from "../../assets/Hero section.svg";
import ImageCardIcon from "../../assets/hero card icon.svg";
import SearchSvg from "../../assets/Search svg.svg"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
function HeroSection({ scrollToUrgent }) {
  return (
    <div className={styles["hero-section"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-content-icon"]}>
          <img src={PlusIcon} alt="" className={styles["plus-icon"]} />
          <img src={HealthCare} alt="" className={styles["health-care"]} />
        </div>

        <div>
          <p className={styles["hero-heading-txt"]}>
            Online Doctors <br />A few Clicks away!
          </p>
          <p className={styles["hero-para-txt"]}>
          Baba Telehealth provides a One-stop Health Solution. A few clicks away! Contact a doctor, other healthcare professionals, or a specialist via text, video, or phone...
          </p>
        </div>
        <div className={styles["search-container"]}>
          <img src={SearchSvg} alt="" className={styles["search-svg-icon"]}/>
          <input
            type="text"
            placeholder="Conditions, procedures, doctors"
            className={styles["search-field"]}
          />
        </div>
        <div className={styles["hero-button"]}>
          <Link to="/search" className={styles["hero-btn"]}>
            Search
            <span className={styles["hero-btn-span"]}>
              <img src={BtnIcon} alt="icon" className={styles["hero-icon"]} />
            </span>
          </Link>
          <Link to="/Search" className={styles["hero-btn-2"]}> See more</Link>
        </div>
      </div>

      <div className={styles["hero-section-image"]} onClick={scrollToUrgent}>
        <div className={styles["image-container"]}>
          <img
            src={HeroSectionImage}
            alt="hero section"
            className={styles["hero-image"]}
          />
        </div>
        <div className={styles["image-card"]}>
          <img
            src={ImageCardIcon}
            alt="card icon"
            className={styles["image-card-icon"]}
          />
          <p className={styles["card-text"]}>Urgent Care</p>
          <Link to="/Search" className={styles["card-button"]}>Make appointment</Link>
        </div>
      </div>
    </div>
  );
}
HeroSection.propTypes = {
  scrollToUrgent: PropTypes.func.isRequired,
};
export default HeroSection;