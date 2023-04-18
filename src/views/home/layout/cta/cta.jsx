import styles from "./cta.module.scss";
import image from "./images/yusef.png";
import Btn from "./components/btn";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function CTA() {
  function handleSubscribeClick(e) {
    e.preventDefault();

    console.log("test");
  }

  return (
    <section
      className={styles.cta}
      id="cta">
      <div className={styles.content}>
        <Fade
          right
          distance="80px"
          delay={200}
          duration={1000}>
          <h2 className={styles.h2}>
            Join the Fun: Yusef Bataineh's Exclusive "Comedy 101" Special!
          </h2>
        </Fade>
        <Fade
          left
          distance="80px"
          delay={200}
          duration={1000}>
          <p className={styles.p}>
            Get ready to laugh with Yusef Bataineh's latest stand-up comedy
            special, "Comedy 101"! Subscribe now and receive your exclusive link
            via WhatsApp and email. Rest assured, we are spam-free!
          </p>
        </Fade>
        <Fade
          bottom
          distance="80px"
          delay={200}
          duration={1000}>
          <div className={styles.btnContainer}>
            <Btn
              className={styles.btn}
              onClick={handleSubscribeClick}>
              Subscribe
            </Btn>
            <Btn className={styles.btn}>Contact</Btn>
          </div>
        </Fade>
      </div>
      <Slide
        bottom
        delay={1000}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={image}
            alt="Yusef Bataineh"
          />
        </div>
      </Slide>
    </section>
  );
}
