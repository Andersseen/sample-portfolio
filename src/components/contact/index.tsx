import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import "./contact.scss";

const FADE_UP = {
  initial: { opacity: 0.5, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" as const },
};

export const Contact = () => {
  return (
    <LampContainer>
      <div className="contact__radial-bg" />
      <div className="contact__container">
        <div className="contact__title-wrapper">
          <div className="contact__title-inner">
            <motion.h1 className="contact__title" {...FADE_UP}>
              Contactme
            </motion.h1>
            <motion.div
              className="contact__draggable contact__draggable--cursor"
              drag
              dragSnapToOrigin
            >
              <img
                src="/cursor.png"
                alt="cursor"
                height={200}
                width={200}
                className="contact__draggable-img"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="contact__draggable contact__draggable--message"
              drag
              dragSnapToOrigin
            >
              <img
                src="/message.png"
                alt="message"
                height={200}
                width={200}
                className="contact__draggable-img"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </LampContainer>
  );
};

export default Contact;
