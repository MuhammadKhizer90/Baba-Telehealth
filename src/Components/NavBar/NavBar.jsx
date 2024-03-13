import Logo1 from "../../assets/heart.svg";
import Logo2 from "../../assets/Baba Telehealth.svg";
import styles from "../NavBar/Navbar.module.scss";
import LoginIcon from "../../assets/login icon.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState} from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "../Dropdown/Dropdown"
import { userLogout } from '../../Features/loginSlice/loginSlice';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function NavBar() {
  
  const isAuthenticated = useSelector(state => state.login.token !== null);
  console.log(isAuthenticated,"isAuthenticated")
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    console.log("dispatch logout")

  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles["logo-container"]}>
           <Link href="/">
            <img src={Logo1} alt="Logo" className={styles.logo1} />
            <img src={Logo2} alt="Logo" className={styles.logo2} />
            </Link>
          </div>

          <div className={styles["hamburger-menu"]} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div
            className={`${styles["nav-links-mobile"]} ${
              isMobileMenuOpen ? styles["mobile-menu-open"] : ""
            }`}
          >
            <Link href="/" className={styles["nav-link-mobile"]}>
              Home
            </Link>
            <Link className={styles["nav-link-mobile"]}>Chat 24/7</Link>
            <Link href="/urgentcare" className={styles["nav-link-mobile"]}>Urgent Care</Link>
            <Link href="/Chat" className={styles["nav-link-mobile"]}>
              Consultation
            </Link>
            <Link href="./drsignup" className={styles["nav-link-mobile"]}>
              Join Us
            </Link>
            <Link href="./aboutus" className={styles["nav-link-mobile"]}>
              About Us
            </Link>
            <Link href="./Contact" className={styles["nav-link-mobile"]}>
              Contact us
            </Link>
            <div className={styles["action-buttons-mobile"]}>
              <button
                className={styles["login-btn-mobile"]}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Signup / Login{" "}
                <span className={styles["Login-btn-span-mobile"]}>
                  <img
                    src={LoginIcon}
                    alt="icon"
                    className={styles["login-icon"]}
                  />
                </span>
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  className={styles["MenuItem"]}
                  sx={{ fontWeight: 700 }}
                >
                  Patients
                  {/* <Link to="/Login" className={styles["dropdown-login-links"]}> */}
                  <Link
                    to="/Login"
                    className={styles["dropdown-login-links"]}
                    style={{
                      marginLeft: '10px',
                      fontSize: '14px',
                      fontWeight:'400',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/signup"
                    className={styles["dropdown-login-links"]}
                    onClick={handleLogout}
                    style={{
                      marginLeft: '10px',
                      fontSize: '14px',
                      textDecoration: 'none',
                      fontWeight:'400',
                      color: 'black'
                    }}
                  >
                    Logout
                  </Link>
                    <Link
                    to="/signup"
                    className={styles["dropdown-login-links"]}
                    style={{
                      marginLeft: '10px',
                      fontSize: '14px',
                      textDecoration: 'none',
                      fontWeight:'400',
                      color: 'black'
                    }}
                  >
                    Login
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem onClick={handleClose} sx={{ fontWeight: 700 }}>
                  Doctors{" "}
                  <Link
                    to="/signup"
                    className={styles["dropdown-login-links"]}
                    style={{
                      marginLeft: '10px',
                      fontSize: '14px',
                      fontWeight:'400',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    Login
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem onClick={handleClose} sx={{ fontWeight: 700 }}>
                  Healthcare Professional{" "}
                  <Link
                    to="/signup"
                    className={styles["dropdown-login-links"]}
                    style={{
                      marginLeft: '10px',
                      fontSize: '14px',
                      fontWeight:'400',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    Login
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className={styles["nav-links"]}>
            <Link to="/" className={styles["nav-link"]}>
              Home
            </Link>
            <Link to="/Chat " className={styles["nav-link"]}>
              Chat 24/7
            </Link>
            <Link to="/urgentcare" className={styles["nav-link"]}>
              Urgent Care
            </Link>
            <Link to="#" className={styles["nav-link"]}>
              <Dropdown/>
            </Link>

            <Link to="./drsignup" className={styles["nav-link"]}>
              Join Us
            </Link>
            <Link to="./aboutus" className={styles["nav-link"]}>
              About Us
            </Link>
            <Link to="./Contact" className={styles["nav-link"]}>
              Contact us
            </Link>
          </div>

          <div className={styles["action-buttons"]}>
          {isAuthenticated ? (
            <button
              className={styles["login-btn"]}
              onClick={handleLogout}
            >
              Logout
              {/* <span className={styles["Login-btn-span"]}>
                <img
                  src={LoginIcon}
                  alt="icon"
                  className={styles["login-icon"]}
                />
              </span> */}
            </button>
          ):(
            <button
              className={styles["login-btn"]}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >

              Signup / Login{" "}
              <span className={styles["Login-btn-span"]}>
                <img
                  src={LoginIcon}
                  alt="icon"
                  className={styles["login-icon"]}
                />
              </span>
            </button>
          )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
                className={styles["MenuItem"]}
                sx={{ fontWeight: 700 }}
              >
                Patients
                <Link
                  to="/Login"
                  className={styles["dropdown-login-links"]}
                  style={{
                    marginLeft: '10px',
                    fontSize: '14px',
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight:'400',
                  }}
                >
                  Sign Up
                </Link>
                {/* {isAuthenticated ? ( */}
                {/* <button
                  to="/signup"
                  className={styles["dropdown-login-links"]}
                  onClick={handleLogout}
                  style={{
                    marginLeft: '10px',
                    fontSize: '14px',
                    textDecoration: 'none',
                    border:'none',
                    fontWeight:'400',
                    color: 'black',
                  }}
                >
                  Logout
                </button> */}
                {/* ):( */}
                  <Link
                  to="/signup"
                  className={styles["dropdown-login-links"]}
                  style={{
                    marginLeft: '10px',
                    fontSize: '14px',
                    textDecoration: 'none',
                    fontWeight:'400',
                    color: 'black',
                  }}
                >
                  Login
                </Link>
                {/* )} */}
              </MenuItem>
              <hr />
              <MenuItem onClick={handleClose} sx={{ fontWeight: 700 }}>
                Doctors{" "}
                <Link
                  to="/signup"
                  className={styles["dropdown-login-links"]}
                  style={{
                    marginLeft: '10px',
                    fontSize: '14px',
                    fontWeight:'400',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >
                  Login
                  
                </Link>
              </MenuItem>
              <hr />
              <MenuItem onClick={handleClose} sx={{ fontWeight: 700 }}>
                Healthcare Professional{" "}
                <Link
                  to="/signup"
                  className={styles["dropdown-login-links"]}
                  style={{
                    marginLeft: '10px',
                    fontSize: '14px',
                    fontWeight:'400',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >
                  Login
                </Link>
              </MenuItem>
            </Menu> 
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
