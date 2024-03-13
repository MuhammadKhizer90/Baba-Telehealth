import styles from "./Footer.module.scss";
import Logo from "../../assets/footer logo.svg";
import MediaBtn from "../../assets/Social Icons.svg";
import { FaFacebook } from "react-icons/fa";
import MediaBtn2 from "../../assets/Social Icons (2).svg";
import MediaBtn3 from "../../assets/Social Icons (3).svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={styles["footer-section"]}>
      <div className={styles["footer-1"]}>
        <Link to="/">
        <div className={styles["footer-1-logo"]}>
          <img src={Logo} alt="" className={styles["footer-1-logo"]} />
        </div>
        </Link>
        <div className={styles["footer-1-links"]}>
         
          <Link to="/aboutus" className={styles["footer-1-links-btn"]}>About us</Link>
          <Link to="/termsanduse" className={styles["footer-1-links-btn"]}>Terms of use</Link>
          <Link to="/privacypolicy" className={styles["footer-1-links-btn"]}>
            Privacy Policy
          </Link>
          <p className={styles["trade-mark-title"]}>Baba Telehealth is a trademark of Baba Healthcare Digital Services inc.</p>
        </div>
        <div className={styles["border-div"]}>
          <p className={styles["footer-2-text"]}>
            © 2022 BabaTelehealth. All rights reserved
          </p>
          <div className={styles["media-btns-div"]}>
          <Link to="https://www.facebook.com/people/Baba-Telehealth/100082670738407/" className={styles["media-btn"]}>
              <FaFacebook className={styles["media-icons-fb"]}/>
            </Link>
            <Link to="https://www.instagram.com/babahealthcaredigitalservice/" className={styles["media-btn"]}>
              <img src={MediaBtn} alt="" className={styles["media-icons"]} />
            </Link>
            <Link to="https://twitter.com/babatelehealth" className={styles["media-btn"]}>
              <img src={MediaBtn2} alt="" className={styles["media-icons"]} />
            </Link>
            <Link to="https://www.youtube.com/channel/UCRkBf3yhWjgUFKSYXdcJFpQ" className={styles["media-btn"]}>
              <img src={MediaBtn3} alt="" className={styles["media-icons"]} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
