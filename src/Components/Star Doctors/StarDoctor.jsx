import styles from "./StarDoctor.module.scss";
import SvgImage from "../../assets/star doctors.svg";
import BtnIcon from "../../assets/login icon.svg";
import { Link } from "react-router-dom";
function StarDoctor() {
  return (
    <div className={styles["star-doctor-section"]}>
      <div className={styles["star-doctor-content"]}>
        <p className={styles["heading-text"]}>Are you a five-star doctor?</p>
        <p className={styles["para-text"]}>
          Sign up now and expand your patient network effortlessly.
        </p>
        <div className={styles["bullet-container"]}>
          <div className={styles["circle-txt"]}>
            <p className={styles["circle"]}></p>
            <p className={styles["bullet-text"]}>
              Get more patients at the comfort of your own office.
            </p>
          </div>

          <div className={styles["circle-txt"]}>
            <p className={styles["circle"]}></p>
            <p className={styles["bullet-text"]}>Grow your online presence.</p>
          </div>
          <div className={styles["circle-txt"]}>
            <p className={styles["circle"]}></p>
            <p className={styles["bullet-text"]}>Make up your own schedule.</p>
          </div>
          <div className={styles["circle-txt"]}>
            <p className={styles["circle"]}></p>
            <p className={styles["bullet-text"]}>
              Organize yourself by storing all your records in one convenient
              platform.
            </p>
          </div>
        </div>
        <Link to="/drsignup" className={styles["joinnow-button"]}>
          Join now{" "}
          <span className={styles["joinnow-btn-span"]}>
            <img src={BtnIcon} alt="icon" className={styles["Joinnow-icon"]} />
          </span>
        </Link>
      </div>
      <div className={styles["star-doctor-image"]}>
        <img src={SvgImage} alt="" className={styles["svg-image"]} />
      </div>
    </div>
  );
}

export default StarDoctor;
