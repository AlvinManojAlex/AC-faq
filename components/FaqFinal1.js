import React, { Fragment, useState } from "react";
import FaqBoxContent from "./FaqBoxContent";
import FaqBoxTitle from "./FaqBoxTitle";
import { DUMMY_DATA } from "./FaqData";
import FaqTitle from "./FaqTitle";

function FaqFinal1(props) {
  return (
    <Fragment>
      {DUMMY_DATA.map((item, index) => {
        if (index % 2 != 0) {
          return (
            <div>
              <FaqBoxTitle
                title={item.title}
                content={item.content}
                index={index}
              />
            </div>
          );
        }
      })}
    </Fragment>
  );
}

export default FaqFinal1;
