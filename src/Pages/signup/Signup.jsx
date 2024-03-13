import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { userLogin } from "../../Features/loginSlice/loginSlice";
// import { toast } from "react-toastify";

const initialState ={
  email:"",
  password:"",
}
export default function Signup() {
  
  const [formData, setFormData] = useState(initialState);

  const [formErrors, setFormErrors] = useState(initialState);

  const renderError = (fieldName) => {
    if (formErrors[fieldName]) {
      return <p className={styles["errorMessage"]}>{formErrors[fieldName]}</p>;
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    let hasErrors = false;

    if (formData.email?.trim() === "") {
      errors.email = "Email should not be empty";
      hasErrors = true;
    }
    if (formData.password?.trim() === "") {
      errors.password = "Password should not be empty";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      setFormErrors(initialState);
      const dataToLogin = {
        email: formData.email,
        password: formData.password,
      };
      console.log(dataToLogin, "data to send ...............");
      dispatch(userLogin(dataToLogin))
      navigate("/")
    }

   
    // if (Object.values(dataToLogin).every(field => field.trim() !== '')) {
    
    // navigate("/")
    // }else{
    //   toast.error("Enter valid credentials")
    // }
    setFormData({
      email: "",
      password: "",
    })
  };

  return (
    <div className={styles["signup-section"]}>
      <div className={styles["signup-container"]}>
        <p className={styles["signup-heading"]}>Login with Email</p>
        <div className={styles["form-section"]}>
          <form action="">
            <div className={styles["fields-container"]}>
              <label htmlFor="" className={styles["label"]}>
                E-mail
              </label>
              <input
                type="email"
                placeholder="Email"
                className={styles["email"]}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {renderError("email")}
            </div>
            <div className={styles["fields-container"]}>
              <label htmlFor="" className={styles["label"]}>
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className={styles["email"]}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {renderError("password")}
            </div>
            <div className={styles["button-container"]}>
              <button className={styles["submit-btn"]} onClick={handleSubmit}>
                Login
              </button>
              <Link to="" className={styles["forget-password"]}>
                Forget your password ?
              </Link>
              <Link to="/login" className={styles["doctor-link"]}>
                Do not have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
