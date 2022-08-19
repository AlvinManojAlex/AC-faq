import React from "react";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={`${classes.layout} ${classes.bgImg}`}>{props.children}</div>
  );
}

export default Layout;
