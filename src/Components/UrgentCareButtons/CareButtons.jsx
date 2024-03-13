import Buttons from "../Buttons/Buttons"
import styles from "./CareButtons.module.scss"
import BtnIcon from "../../assets/chevron-down-solid 10.svg";
import BtnSvg1 from "../../assets/person-dots-from-line-regular 1.svg";
import BtnSvg2 from "../../assets/lungs-virus-regular.svg"
import BtnSvg3 from "../../assets/stomach-regular.svg"
import BtnSvg4 from "../../assets/buttons Svg/icons8-torso-100-01.svg"
import BtnSvg5 from "../../assets/buttons Svg/virus-covid-regular.svg"
import BtnSvg6 from "../../assets/buttons Svg/tooth-regular.svg"
import BtnSvg7 from "../../assets/buttons Svg/ear-regular 1.svg"
import BtnSvg8 from "../../assets/buttons Svg/thermometer-regular.svg"
import BtnSvg9 from "../../assets/buttons Svg/blood-01 1.svg"
import BtnSvg10 from "../../assets/buttons Svg/nausea-01.svg"
import BtnSvg11 from "../../assets/buttons Svg/medicine-01.svg"
import BtnSvg12 from "../../assets/buttons Svg/back-01.svg"
import BtnSvg13 from "../../assets/buttons Svg/newborn-01.svg"
import BtnSvg14 from "../../assets/buttons Svg/red-eye-01.svg"
import BtnSvg15 from "../../assets/buttons Svg/hair-01.svg"
import BtnSvg16 from "../../assets/buttons Svg/eye-01.svg"
import BtnSvg17 from "../../assets/buttons Svg/sore-throat-01.svg"
import BtnSvg18 from "../../assets/buttons Svg/sinus-01.svg"
import BtnSvg19 from "../../assets/buttons Svg/uvula-01.svg"
import BtnSvg20 from "../../assets/buttons Svg/urinary-01.svg"
import BtnSvg21 from "../../assets/buttons Svg/esophagus-01.svg"
function CareButtons() {
  
  return (
    <div>
    <div className={styles["urgent-care-2"]}>
            <div className={styles["urgent-care-2-content"]}>
            <p className={styles["urgent-care-2-heading"]}>Need an urgent care?</p>
            <p className={styles["urgent-care-2-para"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta.</p>
            </div>
        </div>
        
        <div className={styles["urgent-care-2-buttons"]}>

                <div className={styles["buttons-div-1"]}>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg1} text="Allergies" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg4} text="Chest infection" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg7} text="Ear infection" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg10} text="Nausea/Vomiting" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg13} text="Pediatric (Age 2-17)" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg16} text="Stye" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg19} text="Thrush (Oral)" svg2={BtnIcon}/>
                </div>
             
                <div className={styles["buttons-div-2"]}>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg2} text="Acute bronchitis" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg5} text="COVID-19 Rx (Paxlovid)" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg8} text="Flu (Influenza)" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg11} text="Oral herpes" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg14} text="Red eye" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg17} text="Sore throat" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg20} text="UTI" svg2={BtnIcon}/>
                </div>

                <div className={styles["buttons-div-3"]}>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg3} text="Abdominal pain" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg6} text="Dental infection" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg9} text="HIV prevention" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg12} text="Pain relief" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg15} text="Skin, nail, hair" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg18} text="Sinus infection" svg2={BtnIcon}/>
                <Buttons className={styles["urgent-btns"]} svg1={BtnSvg21} text="URI-Respiratory infection" svg2={BtnIcon}/>
                </div>

            </div>
        </div>
  )
}

export default CareButtons