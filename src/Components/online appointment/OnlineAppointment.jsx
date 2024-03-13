import styles from "./OnlineAppointment.module.scss"
import { Link } from "react-router-dom"
import BtnIcon from "../../assets/login icon.svg"
import Svg1 from "../../assets/Group 17.svg"
import Svg2 from "../../assets/Group 18.svg"
import Svg3 from "../../assets/Group 27.svg"
import Svg4 from "../../assets/Group 28.svg"
function OnlineAppointment() {
  return (
    <div className={styles["appointment-section"]}>
      <div className={styles["main-container"]}>
        <div className={styles["logo-container"]}>
          
        <div className={styles["logo-container"]}>
  <div className={styles["logo-svg-appointment"]}><img src={Svg1} alt="Svg1" className={styles["svg-icon"]}/></div>
  <div className={styles["logo-svg-appointment"]}><img src={Svg2} alt="Svg2" className={styles["svg-icon"]}/></div>
  <div className={styles["logo-svg3-appointment"]}><img src={Svg4} alt="Svg3" className={styles["svg-icon3"]}/></div>
  <div className={styles["logo-svg-appointment"]}><img src={Svg3} alt="Svg4" className={styles["svg-icon"]}/></div>
</div>

        </div>
        <div className={styles["appointment-content"]}>
            <p className={styles["heading-text"]}>Online appointments</p>
            <p className={styles["para-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta.</p>
            <Link to="/Search" className={styles["booknow-button"]}>Book now <span className={styles["booknow-btn-span"]}>
              <img src={BtnIcon} alt="icon" className={styles["booknow-icon"]} />
            </span></Link>
        </div>

      </div>
    </div>
  )
}

export default OnlineAppointment