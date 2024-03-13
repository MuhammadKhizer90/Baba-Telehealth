import styles from "./UrgentCare.module.scss";
import BtnIcon from "../../assets/chevron-down-solid 10.svg";
import CareIcon from "../../assets/doctor.svg";
function UrgentCare() {
  return (
    <div className={styles["urgent-care-section"]}>
      <div className={styles["main-container"]}>
        <div className={styles["main-container-image"]}>
          <img src={CareIcon} alt="" className={["main-container-svg"]} />
        </div>
        <div className={styles["urgent-care-content"]}>
          <p className={styles["urgent-care-txt"]}>Urgent care</p>
          <p className={styles["urgent-care-para"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae
            curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nisl, vitae curabitur lorem sit porta.
          </p>
          <button className={styles["urgent-care-btn"]}>
            Need urgent care?
            <span className={styles["urgent-care-btn-span"]}>
              <img
                src={BtnIcon}
                alt="icon"
                className={styles["urgent-care-icon"]}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UrgentCare;
