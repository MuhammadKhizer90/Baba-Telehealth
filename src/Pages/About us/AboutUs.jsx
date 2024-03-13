import styles from "./AboutUs.module.scss";
import Image1 from "../../assets/image1.svg";
import Image2 from "../../assets/image2.svg";
function AboutUs() {
  return (
    <div className={styles["about-us-section"]}>
      <div className={styles["about-heading-container"]}>
        <p className={styles["heading"]}>About Us</p>
        <p className={styles["para-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae
          curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur
          lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nisl, vitae curabitur lorem sit porta.
        </p>
      </div>
      <div className={styles["about-image-container"]}>
        <div className={styles["about-image1-container"]}>
          <img src={Image1} alt="" className={styles["image1"]} />
        </div>
        <div className={styles["about-image1-container"]}>
          <img src={Image2} alt="" className={styles["image1"]} />
        </div>
      </div>
      <div className={styles["hr-line-bottom-div"]}></div>
      <div className={styles["about-content-container"]}>
        <div className={styles["heading-text2-container"]}>
          <p className={styles["about-heading-text-2"]}>
            We provide best healthcare services
          </p>
        </div>
        
        <div className={styles["about-para-container"]}>
          <p className={styles["para2-text1"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            auctor faucibus urna sit elementum pellentesque. Sit sagittis, quis
            ornare proin odio sed lacus morbi. Proin viverra vestibulum pharetra
            cras est. Platea sed amet eu eget pellentesque auctor fames ipsum.
          </p>
          <p className={styles["para2-text2"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
            phasellus id eu sit aliquam. Cursus faucibus condimentum cras
            turpis. Leo aenean lorem ut sit sed venenatis massa mauris ut. Eget
            leo lectus elit mauris dolor. Arcu amet sem scelerisque vehicula
            massa, ipsum lectus commodo aliquam. Sed fringilla egestas lectus
            maecenas malesuada eu. Congue ultricies rhoncus tellus sollicitudin.
            Blandit dolor, pellentesque quam malesuada hendrerit convallis
            iaculis. Nisi sed non risus eu tempor. At massa lorem libero eget
            ultrices mauris, tristique eget leo. Imperdiet ac sit duis nec magna
            cursus.<br></br>
            Tincidunt in amet, sit consequat enim consequat pellentesque aliquet
            pulvinar. Proin quam velit a porta risus, quis mi porta tortor.
            Elementum viverra et urna quis posuere commodo, nec. Volutpat sit
            tellus at turpis habitant quam at diam. Neque, sodales enim et sit
            enim in. Risus viverra vitae sollicitudin mi, venenatis pretium
            neque est. Diam egestas non morbi maecenas. Nibh et mauris metus a
            urna. Pretium, nisi tellus, proin cursus ornare turpis aliquam ut.
            Eu maecenas in non in vel nibh. Blandit tellus lorem lectus enim
            massa quisque condimentum ornare. Suspendisse accumsan sagittis,
            eget tristique pulvinar accumsan semper phasellus. Fames orci
            pellentesque nibh et augue a duis. Nisi, cras lorem molestie quis.
            Purus, aliquam purus quis ipsum tellus aliquet parturient. Donec mi
            sit volutpat eu nisi ut lectus habitant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
