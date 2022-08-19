import React, { Fragment, useState } from "react";
import FaqBoxContent from "./FaqBoxContent";
import classes from "./FaqBoxTitle.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Layout from "./UI/Layout";

function FaqBoxTitle(props) {
  const [visibility, setVisibility] = useState(false);
  const toggleHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <Fragment>
      <div className={`${classes.titleFinal}`} onClick={toggleHandler}>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.buttonAlign}>
          <button className={classes.button}>
            {props.visibility ? "-" : "+"}
          </button>
        </div>
      </div>
      <div className={classes.rel}>
        {visibility && <FaqBoxContent content={props.content} />}
      </div>
      {/* <Accordion>
        <AccordionSummary
          className={classes.title}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.content}</Typography>
        </AccordionDetails>
      </Accordion> */}
    </Fragment>
  );
}

export default FaqBoxTitle;
