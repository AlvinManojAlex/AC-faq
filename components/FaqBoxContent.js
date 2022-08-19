import React, { Fragment } from "react";
import classes from "./FaqBoxContent.module.css";

function FaqBoxContent(props) {
  return (
    <Fragment>
      <p className={`${classes.content} ${classes.width}`}>{props.content}</p>
    </Fragment>
  );
}

export default FaqBoxContent;
