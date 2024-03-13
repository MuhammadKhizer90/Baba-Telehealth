import { useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../Features/createUserSlice/createUserSlice";
// import { toast } from 'react-toastify';

function Login() {
 const initialState={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    month: "",
    day: "",
    year: "",
    gender: "",
  }
  const [formData, setFormData] = useState(initialState);

  const [formErrors, setFormErrors] = useState(initialState);

  const renderError = (fieldName) => {
    if (formErrors[fieldName]) {
      return <p className={styles["errorMessage"]}>{formErrors[fieldName]}</p>;
    }
    return null;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    let hasErrors = false;

    if (formData.firstName?.trim() === "") {
      errors.firstName = "First Name should not be empty";
      hasErrors = true;
    }
    if (formData.lastName?.trim() === "") {
      errors.lastName = "Last Name should not be empty";
      hasErrors = true;
    }

    if (formData.email?.trim() === "") {
      errors.email = "Email should not be empty";
      hasErrors = true;
    }
    if (formData.password?.trim() === "") {
      errors.password = "Password should not be empty";
      hasErrors = true;
    }
    if (formData.confirmPassword?.trim() === "") {
      errors.confirmPassword = "Confirm Password should not be empty";
      hasErrors = true;
    }
    if (formData.month?.trim() === "") {
      errors.month = "Select Month";
      hasErrors = true;
    }
    if (formData.day?.trim() === "") {
      errors.day = "Select Day";
      hasErrors = true;
    }
    if (formData.year?.trim() === "") {
      errors.year = "Select Year";
      hasErrors = true;
    }
    if (formData.gender?.trim() === "") {
      errors.gender = "Select Gender";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      setFormErrors(initialState);
      const dataToSend = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        dob: `${formData.month}/${formData.day}/${formData.year}`,
        gender: formData.gender
      }
      console.log(dataToSend, "data to send ...............")
      dispatch(createUser(dataToSend));
       
    }




    // if (Object.values(formData).every(field => field.trim() !== '')) {
    //   const dataToSend = {
    //     first_name: formData.firstName,
    //     last_name: formData.lastName,
    //     email: formData.email,
    //     password: formData.password,
    //     confirm_password: formData.confirmPassword,
    //     dob: `${formData.month}/${formData.day}/${formData.year}`,
    //     gender: formData.gender
    //   }
    //   console.log(dataToSend, "data to send ...............")
    //   dispatch(createUser(dataToSend));
    // } else {
    //   toast.error('Please fill in all fields');
    // }
  };

  return (
    <div className={styles["login-section"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-heading-container"]}>
          <p className={styles["login-heading"]}>Create an account</p>
          <Link to="/signup" className={styles["login-link"]}>
            Already have one? Login
          </Link>
        </div>
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
          <label htmlFor="" className={styles["label"]}>
            Your Name
          </label>
          <div className={styles["first-last-name"]}>
            <div className={styles["first-name-c"]}>
            <input
              type="text"
              placeholder="First Name"
              className={styles["first-name"]}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {renderError("firstName")}
            </div>
            <div className={styles["last-name-c"]}> 
            <input
              type="text"
              placeholder="Last Name"
              className={styles["first-name"]}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {renderError("lastName")}
             </div>
          </div>
          
          
          <div className={styles["input-fields"]}>
            <label htmlFor="" className={styles["label"]}>
              E-mail
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className={styles["email-field"]}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {renderError("email")}
            <label htmlFor="" className={styles["label"]}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className={styles["email-field"]}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {renderError("password")}

            <label htmlFor="" className={styles["label"]}>
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles["email-field"]}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              
            />
            {renderError("confirmPassword")}
          </div>
          <div className={styles["date-of-birth-container"]}>
            <label htmlFor="" className={styles["label"]}>
              Date of Birth
            </label>
            <div className={styles["date-of-birth"]}>
              <div  className={styles["month-c"]}>
              <input
                type="text"
                placeholder="MM"
                className={styles["month"]}
                name="month"
                value={formData.month}
                onChange={handleChange}
               
              />
               {renderError("month")}
               </div>
               <div  className={styles["month-c"]}>
              <input
                type="text"
                placeholder="DD"
                className={styles["month"]}
                name="day"
                value={formData.day}
                onChange={handleChange}
               
              />
               {renderError("day")}
               </div>
               <div  className={styles["month-c"]}>
              <input
                type="text"
                placeholder="YYYY"
                className={styles["month"]}
                name="year"
                value={formData.year}
                onChange={handleChange}
               
              />
               {renderError("year")}
               </div>
            </div>
          </div>
          <div className={styles["gender"]}>
            <label htmlFor="" className={styles["label"]}>
              Gender
            </label>
            <div className={styles["gender-picker"]}>
              <div className={styles["gender-btns"]}>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label htmlFor="male" className={styles["gender-title"]}>
                  Male
                </label>
              </div>

              <div className={styles["gender-btns"]}>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label htmlFor="female" className={styles["gender-title"]}>
                  Female
                </label>
              </div>
             
            </div>
            {renderError("gender")}
          </div>
          <div className={styles["terms-of-use"]}>
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptance"
              className={styles["agree-btn"]}

            />
            <p className={styles["acceptance-text"]}>
              I have read and accept BabaTelehealth{" "}
              <Link to="" className={styles["acceptance-spn"]}>
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to="" className={styles["acceptance-spn"]}>
                Privacy Policy.
              </Link>
            </p>
          </div>
          <div className={styles["button-container"]}>
            <button type="submit" className={styles["submit-btn"]}>
              Save and Continue
            </button>
            <Link to="/drsignup" className={styles["doctor-link"]}>
              Are you a doctor ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
