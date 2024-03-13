import styles from "./Health.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
function Health({ title,text,Svg }) {
  return (
    <div className={styles["health-section"]}>
      <div className={styles["health-main-container"]}>
        <div className={styles["health-content"]}>
          <div className={styles["health-heading"]}>
            <p className={styles["health-title-text"]}>{title}</p>
          </div>
          <p className={styles["health-para-text"]}>
            {text}
          </p>
          <div className={styles["terms-of-use"]}>
            <input
              type="radio"
              id="acceptTerms"
              name="acceptance"
              className={styles["agree-btn"]}
              required
            />
            <p className={styles["acceptance-text"]}>
              I certify that the insurance or payment selected is the one that i
              will be using when I interact for health advice, and that i have
              read and agree to the baba telehealth{" "}
              <Link to="/termsanduse" className={styles["acceptance-spn"]}>
                terms of Use
              </Link>
            </p>
          </div>
          <div className={styles["btn-container"]}>
            <Link to="/Search" className={styles["booking-button"]}>
              Book appointment
            </Link>
          </div>
        </div>
        <div className={styles["health-image"]}>
          <img src={Svg} alt="" />
        </div>
      </div>
    </div>
  );
}
Health.propTypes = {
  title: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired,
  Svg: PropTypes.element.isRequired, 
};
export default Health;
