import React, { Fragment, useState } from "react";
import FaqBoxContent from "./FaqBoxContent";
import classes from "./FaqBoxTitle.module.css";
import { motion } from "framer-motion";

function FaqBoxTitle(props) {
  const [visibility, setVisibility] = useState(false);
  const toggleHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <Fragment>
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, type: "spring" } }}
      >
        <div
          className={`${classes.titleFinal} ${
            visibility ? classes.titleFinalActive : ""
          }`}
          onClick={toggleHandler}
        >
          {/* motion.h1 */}
          <motion.p layout="fixed" className={classes.title}>
            {props.title}
          </motion.p>
          <motion.div layout="fixed" className={classes.buttonAlign}>
            <button className={classes.button}>
              {props.visibility ? "-" : "+"}
            </button>
          </motion.div>
        </div>
        <div className={classes.rel}>
          {visibility && <FaqBoxContent content={props.content} />}
        </div>
      </motion.div>
    </Fragment>
  );
}

export default FaqBoxTitle;
