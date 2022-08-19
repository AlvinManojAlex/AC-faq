import React, { Fragment, useState } from "react";
import FaqBoxContent from "./FaqBoxContent";
import FaqBoxTitle from "./FaqBoxTitle";
import FaqTitle from "./FaqTitle";

function FaqFinal() {
  const DUMMY_DATA = [
    {
      content:
        "Nisi incididunt magna incididunt in esse mollit elit fugiat eu eu aute. Consectetur elit Lorem magna sint cillum cillum. Anim qui anim nisi ipsum nisi commodo ipsum. Id pariatur enim mollit nisi ipsum consectetur proident consectetur. Et aliqua mollit officia irure mollit esse amet.\r\n",
      title: "Hello, undefined! You have 2 unread messages.",
    },
    {
      content:
        "Laborum sit nulla id magna excepteur ut Lorem amet ex cupidatat cillum. Laboris esse duis aute sunt amet eu culpa fugiat qui amet dolor magna amet non. Nostrud proident aliquip cillum cillum mollit nisi. Incididunt adipisicing qui consectetur cupidatat nostrud. Irure eu enim enim quis qui fugiat est.\r\n",
      title: "Hello, undefined! You have 7 unread messages.",
    },
    {
      content:
        "Labore ea id ea esse irure ut. Occaecat quis sint dolore sint laboris laboris exercitation tempor mollit culpa labore incididunt commodo. Dolor ullamco ad pariatur dolor. Eiusmod ipsum irure ut consequat est irure veniam occaecat magna magna dolor labore exercitation commodo. Mollit adipisicing proident aliquip voluptate ut irure tempor proident quis duis reprehenderit. Eu minim exercitation irure consectetur pariatur pariatur eu adipisicing Lorem nulla deserunt nostrud occaecat.\r\n",
      title: "Hello, undefined! You have 10 unread messages.",
    },
    {
      content:
        "Duis deserunt sint reprehenderit elit elit officia eiusmod magna adipisicing. In labore irure duis qui. Do in adipisicing non magna laboris. Magna amet consectetur voluptate ex. Anim exercitation consectetur dolor ad duis labore tempor cupidatat nisi sit laboris. Consectetur sunt ea velit laborum magna magna pariatur magna fugiat culpa proident.\r\n",
      title: "Hello, undefined! You have 7 unread messages.",
    },
    {
      content:
        "Amet laborum mollit ex enim. Labore id sit duis sit anim ullamco. Elit ea aute velit irure. Non elit ex tempor culpa laborum officia anim. Esse incididunt cillum sunt aute velit amet sunt elit. Sit culpa eu sit qui deserunt esse consectetur aute aliquip. Magna non nisi adipisicing sunt cillum.\r\n",
      title: "Hello, undefined! You have 9 unread messages.",
    },
    {
      content:
        "Anim sunt incididunt nulla ad nisi. Irure officia reprehenderit aliqua elit cupidatat proident qui anim cillum consequat sit excepteur do. Nisi nisi velit exercitation consectetur mollit adipisicing dolor Lorem. Deserunt excepteur fugiat eiusmod amet pariatur eiusmod quis non laboris deserunt cupidatat ex dolor. Tempor pariatur commodo ipsum nisi minim exercitation.\r\n",
      title: "Hello, undefined! You have 8 unread messages.",
    },
  ];
  //   const [visible, setVisible] = useState(false);
  //   const changeToggleHandler = () => {
  //     setVisible(!visible);
  //   };
  return (
    <Fragment>
      {DUMMY_DATA.map((item, index) => {
        return (
          <div>
            <FaqBoxTitle
              title={item.title}
              content={item.content}
              index={index}
            />
          </div>
        );
      })}
    </Fragment>
  );
}

export default FaqFinal;
