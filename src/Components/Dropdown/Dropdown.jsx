import { useState } from 'react';
import styles from'./Dropdown.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles["menu-container"]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles["menu-trigger"]}>Consultation</div>
      {isOpen && (
        <div className={styles["menu"]}>
          <Link to="/menhealth" className={styles["drop-down-menu-links"]}>Mens Health</Link>
          <Link to="/womenhealth" className={styles["drop-down-menu-links"]}>Womens Health</Link>
          <Link to="/stis" className={styles["drop-down-menu-links"]}>STIs</Link>
          <Link to="/misc-health" className={styles["drop-down-menu-links"]}>Miscellaneous Health</Link>
          <Link to="/chat" className={styles["drop-down-menu-links"]}>Chat 24/7</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
