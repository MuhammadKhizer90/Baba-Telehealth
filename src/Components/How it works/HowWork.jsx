import styles from "./HowWork.module.scss";
import SvgIcon from "../../assets/work.svg";
import SvgIcon2 from "../../assets/Group 1 (1).svg";
import SvgIcon3 from "../../assets/Image.svg";
import { useState } from "react";

function HowWork() {
  const [activeButton, setActiveButton] = useState("button1");
  const [imageSource, setImageSource] = useState(SvgIcon);
  const [paragraphText, setParagraphText] = useState(
    "Browse Doctors / Medical conditions"
  );

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    switch (buttonName) {
      case "button1":
        setParagraphText("Browse Doctors / Medical conditions");
        setImageSource(SvgIcon);
        break;
      case "button2":
        setParagraphText("Consultation type");
        setImageSource(SvgIcon2);
        break;
      case "button3":
        setParagraphText("Make payment & confirm appointment");
        setImageSource(SvgIcon3);
        break;
      default:
        setImageSource("");
        setParagraphText("");
    }
  };

  return (
    <div className={styles["How-it-works"]}>
      <p className={styles["main-heading"]}>How It Works</p>
      <p className={styles["main-para"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae
        curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nisl, vitae curabitur lorem sit porta.
      </p>
      <div className={styles["main-container"]}>
        <div className={styles["image-container"]}>
          <p className={styles["image-heading"]}>{paragraphText}</p>
          <img src={imageSource} alt="Image" className={styles["svg-icon"]} />
        </div>

        <div className={styles["content-container"]}>
          <div
            className={`${styles["first-container"]} ${
              activeButton === "button1" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("button1")}
          >
            <div className={styles["icon-circle"]}>
              <p className={styles["circle-icon-number"]}>01</p>
            </div>
            <div>
              <p className={styles["first-container-heading"]}>
                Browse Doctors / Medical conditions
              </p>
              <p className={styles["first-container-para"]}>
                Download and install the app from play store or app store. The
                app will guide you through the configuration process. Live
                support is available to help you. Procedure works seamlessly
                for
              </p>
              <div className={styles["first-container-button"]}>
                <button className={styles["first-container-btns"]}>
                  Mother
                </button>
                <button className={styles["first-container-btns"]}>
                  Student
                </button>
                <button className={styles["first-container-btns"]}>
                  Young adult
                </button>
                <button className={styles["first-container-btns"]}>
                  Mother
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${styles["second-container"]} ${
              activeButton === "button2" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("button2")}
          >
            <div className={styles["icon-circle"]}>
              <p className={styles["circle-icon-number"]}>02</p>
            </div>
            <div>
              <p className={styles["second-container-heading"]}>
                Consultation type
              </p>
              <p className={styles["second-container-para"]}>
                Download and install the app from play store or app store. The
                app will guide you through the configuration process. Live
                support is available to help you. Procedure works seamlessly
                for
              </p>
            </div>
          </div>

          <div
            className={`${styles["second-container"]} ${
              activeButton === "button3" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("button3")}
          >
            <div className={styles["icon-circle"]}>
              <p className={styles["circle-icon-number"]}>03</p>
            </div>
            <div>
              <p className={styles["second-container-heading"]}>
                Make payment & confirm appointment
              </p>
              <p className={styles["second-container-para"]}>
                Download and install the app from play store or app store. The
                app will guide you through the configuration process. Live
                support is available to help you. Procedure works seamlessly
                for
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
