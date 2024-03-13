import styles from "./Buttons.module.scss";
import PropTypes from 'prop-types';
const Buttons = ({ text,svg1,svg2 }) => {
  return (
    <div className={styles["buttons-section"]}>
        <button className={styles["urgent-care-btn"]}>
        <div className={styles["svg1-text"]}>
            <img src={svg1} alt="" className={styles["btn-svg1"]}/>
            {text}
            </div>
            <span className={styles["urgent-care-btn-span"]}>
              <img
                src={svg2}
                alt="icon"
                className={styles["urgent-care-icon"]}
              />
            </span>
          </button>
    </div>
  )
}
Buttons.propTypes = {
  text: PropTypes.string.isRequired, 
  svg1: PropTypes.element.isRequired, 
  svg2: PropTypes.element.isRequired, 
};

export default Buttons