import styles from './Chat.module.scss'
import { Link } from 'react-router-dom'
function Chat() {
  const paragraph=`You can chat with Baba Telehealth ${'"Health Bot"'} 24 hours a day, seven days a week. The Health Tool from Baba Telehealth give users a private, anonymous and discreet online place to chat about health issues and get information, advice, guidance, and help right away. Our virtual agents give accurate and up-to-date health information and make suggestions based on what the user is worried about and how they are feeling. It can manage a large number of health inquiries at once, ensuring prompt guidance in high-demand or immediate healthcare situations or concerns. Although Baba Telehealth's Health bot and virtual agents can be useful, they should not replace traditional healthcare or face-to-face patient visits in an emergency situation like a heart attack or stroke. Instead, patients should consult a doctor or healthcare practitioner for physical examinations or in-person care. Baba Telehealth AI-enabled virtual agents interact with patients to provide triage, health advice, and information. AI-driven symptom analysis is used in the Urgent Care category before connecting patients with doctors. In summary, Baba Telehealth's Health bot and virtual agents offer various benefits, including providing information and assistance, ensuring anonymity, and providing a convenient and efficient way to manage health inquiries or signpost you to a medical professional. If you have any health concerns or questions. We are here to assist you in achieving a healthier and happier life.`
  return (
    <div className={styles["chat-section"]}>
        <div className={styles["chat-container"]}>
     <p className={styles["chat-title"]}>Baba Telehealth offers 24/7 online diagnosis and treatment via your mobile device</p>
     <div className={styles["chat-heading"]}>
        <p className={styles["heading"]}>Chat 24/7</p>
     </div>
     <p className={styles["para-text"]}>{paragraph}</p>
     <p className={styles["text"]}>No, do- it- yourself (DIY) with your health. Get treatment</p>
     <div className={styles["terms-of-use"]}>
          <input
            type="radio"
            id="acceptTerms"
            name="acceptance"
            className={styles["agree-btn"]}
            required
          />
          <p className={styles["acceptance-text"]}>
              I certify that the insurance or payment selected is the one that i will be using when I interact for health advice, and that i have read and agree to the baba telehealth <Link to="/termsanduse" className={styles["acceptance-spn"]}>terms of Use</Link></p>
          </div>
          <div className={styles["btn-container"]}>
            <Link to="/Search" className={styles["booking-button"]}>
              Book appointment
            </Link>
          </div>
     </div>
     <div className={styles["chat-image"]}>
     <img src="https://www.babatelehealth.com/api/data/pictures/chat24x7.png" alt="" className={styles["image-chat"]}/>
     </div>
    </div>
  )
}

export default Chat