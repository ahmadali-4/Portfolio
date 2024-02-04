import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faStar,
  faHeart,
  faSmile,
  faSun,
  faMoon,
  faBell,
  faEnvelope,
  faGlobe,
  faMusic,
  faTree,
  faCar,
  faCamera,
  faBook,
  faPlane,
  faBasketballBall,
  faCrown,
  faRocket,
  faUmbrella,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./background.scss";

const icons = [
  faCoffee,
  faStar,
  faHeart,
  faSmile,
  faSun,
  faMoon,
  faBell,
  faEnvelope,
  faGlobe,
  faMusic,
  faTree,
  faCar,
  faCamera,
  faBook,
  faPlane,
  faBasketballBall,
  faCrown,
  faRocket,
  faUmbrella,
  faTachometerAlt,
];
import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: "-100%",
    y: "100%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

export const Icons = () => {
  return (
    <motion.div
      className="background-wrapper"
    >
      {icons.map((icon, index) => (
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          key={index}
          className="icons"
        >
          <FontAwesomeIcon icon={icon} />
        </motion.div>
      ))}
    </motion.div>
  );
};
