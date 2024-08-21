import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DoctorSignup.module.scss";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { createDoctor } from "../../Features/createDoctorSlice/createDoctorSlice";
import { createProfessional } from "../../Features/createProfessionalSlice/createProfessionalSlice";
// import { toast } from "react-toastify";

function Form() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    region: "",
    language: "",
    description: "",
    experience: "",
    speciality: "",
    educationAndTraining: "",
    practiceName: "",
    affiliatins: "",
    userType: "doctor",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfessional, setIsProfessional] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const [formErrors, setFormErrors] = useState(initialState);

  const renderError = (fieldName) => {
    if (formErrors[fieldName]) {
      return <p className={styles["errorMessage"]}>{formErrors[fieldName]}</p>;
    }
    return null;
  };

  const [formTitle, setFormTitle] = useState("Doctor's Form");

  const handleButtonClick = (isProfessional) => {
    // setIsProfessional(isProfessional);
    // setFormData({
    //   ...formData,
    //   userType: isProfessional ? "professional" : "doctor",
    // });
    // if (isProfessional) {
    //   setFormTitle("Telemedicine Healthcare Professional Form");
    // } else {
    //   setFormTitle("Doctor's Form");
    // }
    if (isProfessional && formData.userType !== "professional") {
      setIsProfessional(true);
      setFormTitle("Telemedicine Healthcare Professional Form");
      setFormData({
        ...formData,
        userType: "professional",
      });
    } else if (!isProfessional && formData.userType !== "doctor") {
      setIsProfessional(false);
      setFormTitle("Doctor's Form");
      setFormData({
        ...formData,
        userType: "doctor",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData, "form data in console");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.userType === "professional") {
      let errors = {};
      let hasErrors = false;

      if (formData.name?.trim() === "") {
        errors.name = "Enter your name";
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
      if (formData.language?.trim() === "") {
        errors.language = "Choose language";
        hasErrors = true;
      }
      if (formData.phone?.trim() === "") {
        errors.phone = "Contact should not be empty";
        hasErrors = true;
      }
      if (formData.description?.trim() === "") {
        errors.description = "Confirm Password should not be empty";
        hasErrors = true;
      }
      if (formData.speciality?.trim() === "") {
        errors.speciality = "Confirm Password should not be empty";
        hasErrors = true;
      }
      if (formData.experience?.trim() === "") {
        errors.experience = "Enter field should not be empty";
        hasErrors = true;
      }
      if (formData.educationAndTraining?.trim() === "") {
        errors.educationAndTraining = "Enter education and training";
        hasErrors = true;
      }
      if (formData.practiceName?.trim() === "") {
        errors.practiceName = "Practice field should not be empty";
        hasErrors = true;
      }
      if (formData.affiliatins?.trim() === "") {
        errors.affiliatins = "Hospital Affiliation should not be empty";
        hasErrors = true;
      }

      if (hasErrors) {
        setFormErrors(errors);
      } else {
        setFormErrors(initialState);
        const professionalFormData = {
          first_name: formData.name,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
          language: formData.language,
          phone_number: formData.phone,
          description: formData.description,
          speciality: formData.speciality,
          experience: formData.experience,
          education: formData.educationAndTraining,
          practice: formData.practiceName,
          hospital_affiliation: formData.affiliatins,
          userType: formData.userType,
        };
        console.log("Submitting data for professional:", professionalFormData);
        dispatch(createProfessional(professionalFormData));
        navigate("/signup");
      }
      // if (Object.values(professionalFormData).every(field => field.trim() !== '')) {

      // }else {
      //   toast.error('Please fill in all fields');
      // }
      setFormData({
        ...formData,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        description: "",
        language: "",
        experience: "",
        speciality: "",
        educationAndTraining: "",
        practiceName: "",
        affiliatins: "",
      });
    } else {
      let errors = {};
      let hasErrors = false;

      if (formData.name?.trim() === "") {
        errors.name = "Enter your name";
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
      if (formData.city?.trim() === "") {
        errors.city = "Choose city";
        hasErrors = true;
      }
      if (formData.region?.trim() === "") {
        errors.region = "Choose region";
        hasErrors = true;
      }
      if (formData.language?.trim() === "") {
        errors.language = "Choose language";
        hasErrors = true;
      }
      if (formData.phone?.trim() === "") {
        errors.phone = "Contact should not be empty";
        hasErrors = true;
      }
      if (formData.description?.trim() === "") {
        errors.description = "fill the description";
        hasErrors = true;
      }
      if (formData.speciality?.trim() === "") {
        errors.speciality = "Select speciality";
        hasErrors = true;
      }
      if (formData.experience?.trim() === "") {
        errors.experience = "Experience field should not be empty";
        hasErrors = true;
      }
      if (formData.educationAndTraining?.trim() === "") {
        errors.educationAndTraining = "Enter education and training";
        hasErrors = true;
      }
      if (formData.practiceName?.trim() === "") {
        errors.practiceName = "Practice field should not be empty";
        hasErrors = true;
      }
      if (formData.affiliatins?.trim() === "") {
        errors.affiliatins = "Hospital Affiliation should not be empty";
        hasErrors = true;
      }

      if (hasErrors) {
        setFormErrors(errors);
      } else {
        setFormErrors(initialState);
        const doctorFormData = {
          first_name: formData.name,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
          city: formData.city,
          region: formData.region,
          language: formData.language,
          phone_number: formData.phone,
          description: formData.description,
          speciality: formData.speciality,
          experience: formData.experience,
          education: formData.educationAndTraining,
          practice: formData.practiceName,
          hospital_affiliation: formData.affiliatins,
          userType: formData.userType,
        };
        dispatch(createDoctor(doctorFormData));
        console.log("Submitting data for doctor:", doctorFormData);
        navigate("/signup");
      }

      //   if (Object.values(doctorFormData).every(field => field.trim() !== '')) {
      // }else{
      //   toast.error("please fill in all fields")
      // }
      setFormData({
        ...formData,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        city: "",
        region: "",
        language: "",
        description: "",
        experience: "",
        speciality: "",
        educationAndTraining: "",
        practiceName: "",
        affiliatins: "",
        userType: "",
      });
    }
  };
  const options = [
    { value: "Kaduna", label: "Kaduna" },
    { value: "Delta", label: "Delta" },
    { value: "Bouchi", label: "Bouchi" },
    { value: "Adamawa", label: "Adamawa" },
    { value: "borno", label: "borno" },
    { value: "osun", label: "osun" },
    { value: "oyo", label: "oyo" },
  ];

  const languages = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "Housa", label: "Housa" },
  ];

  const speciality = [
    { value: "Dentist", label: "Dentist" },
    { value: "Nurse", label: "Nurse" },
    { value: "Surgeon", label: "Surgeon" },
    { value: "Home Care", label: "Home Care" },
    { value: "Helium", label: "Helium" },
    { value: "Eye Doctor", label: "Eye Doctor" },
  ];

  return (
    <div className={styles["doctor-form-section"]}>
      <div className={styles["doctor-main-container"]}>
        <div className={styles["doctor-from-buttons"]}>
          <button
            className={`${styles.isProfessional} ${
              !isProfessional ? styles.active : ""
            }`}
            onClick={() => handleButtonClick(false)}
          >
            Doctor
          </button>
          <button
            className={`${styles.isProfessional} ${
              isProfessional ? styles.active : ""
            }`}
            onClick={() => handleButtonClick(true)}
          >
            Professional
          </button>
          <div className={styles["heading-container"]}>
            <p className={styles["form-title-text"]}>{formTitle}</p>
          </div>
        </div>
        <div className={styles["doctor-form-container"]}>
          <form className={styles["form-containerr"]} onSubmit={handleSubmit}>
            <p className={styles["personel-info"]}>Personal Info</p>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className={styles["dr-form-input-fields"]}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {renderError("name")}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={styles["dr-form-input-fields"]}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {renderError("email")}
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              className={styles["dr-form-input-fields"]}
              value={formData.password}
              onChange={handleInputChange}
            />
            {renderError("password")}
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              className={styles["dr-form-input-fields"]}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {renderError("confirmPassword")}
            {!isProfessional && (
              <Box sx={{ display: "flex", minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ paddingTop: "10px" }}
                  >
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-region"
                    value={formData.region}
                    label="Region"
                    name="region"
                    onChange={handleInputChange}
                    sx={{
                      marginTop: 1.5,
                      width: 245,
                      height: 50,
                      "@media (max-width: 600px)": {
                        width: "308px",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {renderError("region")}
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ paddingTop: "10px" }}
                  >
                    City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-city"
                    value={formData.city}
                    label="City"
                    name="city"
                    onChange={handleInputChange}
                    sx={{
                      marginTop: 1.5,
                      width: 245,
                      height: 50,
                      "@media (max-width: 600px)": {
                        width: "308px",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {renderError("city")}
                </FormControl>
              </Box>
            )}
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ paddingTop: "12px" }}
              >
                Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.language}
                label="Language"
                name="language"
                onChange={handleInputChange}
                sx={{
                  marginTop: 2,
                  width: 500,
                  height: 50,
                  "@media (max-width: 600px)": {
                    width: "308px",
                  },
                }}
              >
                {languages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {renderError("language")}
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Contact No"
              variant="outlined"
              className={styles["dr-form-input-fields"]}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {renderError("phone")}
            <Textarea
              placeholder="About yourself"
              variant="outlined"
              className={styles["dr-form-textarea-field"]}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            {renderError("description")}
            <p className={styles["education-title"]}>
              Education and Background
            </p>
            <p className={styles["label-heading"]}>Specialty & experience</p>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ paddingTop: "10px" }}
              >
                Speciality
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.speciality}
                label="Speciality"
                name="speciality"
                onChange={handleInputChange}
                sx={{
                  marginTop: 1.5,
                  width: 500,
                  height: 50,
                  "@media (max-width: 600px)": {
                    width: "308px",
                  },
                }}
              >
                {speciality.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {renderError("speciality")}
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Experience (years)"
              variant="outlined"
              className={styles["dr-form-input-fields"]}
              name="experience"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.experience}
              onChange={handleInputChange}
            />
            {renderError("experience")}
            <p className={styles["label-heading"]}>Education & Training</p>
            <TextField
              id="outlined-basic"
              label="Type and press enter"
              variant="outlined"
              className={styles["dr-form-input-fields"]}
              name="educationAndTraining"
              value={formData.educationAndTraining}
              onChange={handleInputChange}
            />
            {renderError("educationAndTraining")}
            <p className={styles["label-heading"]}>Practice Names</p>
            <TextField
              id="outlined-basic"
              label="Type and press enter"
              variant="outlined"
              className={styles["dr-form-input-fields"]}
              name="practiceName"
              value={formData.practiceName}
              onChange={handleInputChange}
            />
            {renderError("practiceName")}
            <p className={styles["label-heading"]}>Hospital Affiliations</p>
            <TextField
              id="outlined-basic"
              label="Type and press enter"
              variant="outlined"
              className={styles["dr-form-input-fields"]}
              name="affiliatins"
              value={formData.affiliatins}
              onChange={handleInputChange}
            />
            {renderError("affiliatins")}
            <button type="submit" className={styles["submit-btn"]}>
              Submit
            </button>
          </form>
          <Link to="/signup" className={styles["register-link"]}>
            Already Registered ? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
