import styles from './Contact.module.scss'

function ContactUs() {
  return (
    <div className={styles["contact-us-section"]}>
        <div className={styles["contacct-us-container"]}>
            <div className={styles["Heading-container"]}>
                <p className={styles["heading-text"]}>
                    Get In Touch
                </p>
                <p className={styles["paragraph-text"]}>
                If you’re a patient looking for precise and convenient healthcare options accessible from the comfort of your home, or a practitioner looking for new professional opportunities, get in touch to learn more about Baba Telehealth. We’re here to answer questions and walk you through a complete demonstration of the platform.
                </p>
            </div>
            <div className={styles["contact-form-container"]}>
                 <form action="">
                  <input type="text" placeholder='Name' className={styles["Name"]}/>
                  <input type="email" placeholder='Email' className={styles["Name"]}/>
                  <textarea type="text" placeholder='Message for baba telehealth' className={styles["discription"]}/>
                  <div className={styles["button-container"]}>
                     <button className={styles["submit-btn"]}>
                       Submit
                    </button>
                  </div>
                 </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs