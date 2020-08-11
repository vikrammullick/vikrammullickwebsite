import React from "react";
import {
  darkGray,
  orange,
  // yale,
  slate,
  black,
  // periwinkle,
  // white,
  // lightblue,
  lightGray,
  // blue
} from "./Colors";
import { Button } from "@material-ui/core/";

import logo from "./assets/logo.png";
import snackpass from "./assets/snackpass.png";
// import pcb from "./assets/pcb.png";
import resnet from "./assets/resnet.png";
// import regression from "./assets/regression.png";
import grapher from "./assets/grapher.png";
import { isMobile } from "react-device-detect";

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

const _getButton = (url, width, label) => {
  return (
    <Button
      onClick={() => {
        openInNewTab(url);
      }}
      style={{
        marginLeft: 10,
        width: width,
        backgroundColor: lightGray,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: width,
        }}
      >
        <text
          style={{
            fontSize: 20,
            fontFamily: "Avenir Next",
            fontWeight: "500",
            fontStyle: "normal",
            color: black,
            textTransform: "none",
          }}
        >
          {label}
        </text>
      </div>
    </Button>
  );
};

const _header = (headerTitle) => {
  return <h1 style={styles.header}>{headerTitle}</h1>;
};

const _name = (name) => {
  return <text style={styles.name}>{name}</text>;
};

const _projecHeader = (project, asset, radius) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <text
        style={{
          fontFamily: "Avenir Next",
          fontWeight: "500",
          fontSize: 30,
        }}
      >
        {project}
      </text>
      <div
        style={{
          height: 50,
          width: 50,
          overflow: "hidden",
          borderRadius: radius,
        }}
      >
        <img
          src={asset}
          alt={project}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </div>
    </div>
  );
};

const _about = () => {
  return (
    <div style={styles.subContainer}>
      <text style={styles.normalText}>
        Hi! My name is Vikram, and I am a student at{" "}
        <text style={{ color: black, fontWeight: "500" }}>Yale University</text>{" "}
        majoring in{" "}
        <text style={{ color: orange, fontWeight: "500" }}>
          Computer Science
        </text>{" "}
        (B.S.) and{" "}
        <text style={{ color: orange, fontWeight: "500" }}>Economics</text>{" "}
        (B.A.).
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        Some interests of mine include machine learning, embedded systems,
        startups, fintech, and mobile development.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        This past summer I worked at{" "}
        <text style={{ fontWeight: "500" }}>Pure Storage</text> as a software
        engineering intern on the FlashBlade Object Store team.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        From May to December 2018 I worked at{" "}
        <text style={{ fontWeight: "500" }}>Snackpass</text>, a startup backed
        by <text style={{ fontWeight: "500" }}>YC</text> and{" "}
        <text style={{ fontWeight: "500" }}>a16z</text>, as one of their first
        full-time engineers.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        At Yale, I am part of a Natural Language Processing lab researching
        converting natural language to SQL database queries as well as managing
        and managing and developing productization of the research for
        commercial use in partnership with startups.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        During Spring 2020 I served as lead{" "}
        <text style={{ fontWeight: "500" }}>TA</text> for a graduate-level deep
        learning course at Yale.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        In my free time I enjoy playing tennis and chess and reading about
        American history.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        This fall I will be joining{" "}
        <text style={{ fontWeight: "500" }}>Matician</text> as an AI resident.
      </text>
    </div>
  );
};

const _languages = () => {
  return (
    <div style={{ ...styles.subContainer, marginBottom: 10 }}>
      <text style={{ ...styles.normalText }}>
        <text style={{ fontWeight: "500" }}>Programming Languages: </text>
      </text>
      <text style={{ ...styles.normalText }}>
        <text style={{ color: slate }}>C</text>,{"   "}
        <text style={{ color: slate }}>C++</text>,{"   "}
        <text style={{ color: slate }}>Python</text>,{"   "}
        <text style={{ color: slate }}>Java</text>,{"   "}
        <text style={{ color: slate }}>JavaScript</text>,{"   "}
        <text style={{ color: slate }}>Swift</text>,{"   "}
        <text style={{ color: slate }}>SQL</text>,{"   "}
        <text style={{ color: slate }}>R</text>,{"   "}
        <text style={{ color: slate }}>Objective-C</text>
      </text>
    </div>
  );
};
const _frameworks = () => {
  return (
    <div style={{ ...styles.subContainer, marginBottom: 10 }}>
      <text style={{ ...styles.normalText }}>
        <text style={{ fontWeight: "500" }}>Frameworks & Tools: </text>
      </text>
      <text style={{ ...styles.normalText }}>
        <text style={{ color: slate }}>TensorFlow</text>,{"   "}
        <text style={{ color: slate }}>PyTorch</text>,{"   "}
        <text style={{ color: slate }}>CUDA</text>,{"   "}
        <text style={{ color: slate }}>React</text>,{"   "}
        <text style={{ color: slate }}>Express</text>,{"   "}
        <text style={{ color: slate }}>Flask</text>,{"   "}
        <text style={{ color: slate }}>Docker</text>,{"   "}
        <text style={{ color: slate }}>EAGLE</text>
      </text>
    </div>
  );
};

const _divider = () => {
  return <div style={styles.divider}></div>;
};

const _contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={styles.subContainer}>
        <text
          style={{
            fontFamily: "Avenir Next",
            fontSize: 24,
          }}
        >
          vikram.mullick@yale.edu
        </text>
        {/* <text
          style={{
            fontFamily: "Avenir Next",
            fontSize: 24
          }}
        >
          (832) 967-7670
        </text> */}
      </div>
      {isMobile ? null : (
        <div
          style={{
            ...styles.subContainer,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          {_getButton(
            "https://www.linkedin.com/in/vikram-mullick-39978a159/",
            125,
            "LinkedIn"
          )}
          {_getButton("https://github.com/vikrammullick", 125, "GitHub")}
          {/* {_getButton("https://lichess.org/@/jpvalley", 125, "lichess")} */}
        </div>
      )}
    </div>
  );
};

const _blubag = () => {
  return (
    <div style={{ ...styles.subContainer }}>
      <text style={styles.normalText}>
        BluBag is an e-commerce app that I founded and have been working on
        since April 2019. The core concept behind the platform is{" "}
        <text style={{ fontWeight: "600" }}>
          food delivery for high schoolers
        </text>
        , taking advantage of the fact that high schoolers eat lunch at the same
        time everyday by offering{" "}
        <text>bulk ordering and delivery to cut costs</text>.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10, marginBottom: 10 }}>
        BluBag currently consists of a user-facing app as well as an internal
        dashboard (front end development in{" "}
        <text style={{ color: orange, fontWeight: "500" }}>
          React Native/React.js
        </text>{" "}
        and back end development in{" "}
        <text style={{ color: orange, fontWeight: "500" }}>Node.js</text>).
        Payments are processed using{" "}
        <text style={{ color: orange, fontWeight: "500" }}>Stripe</text>.
      </text>
      <text style={styles.normalText}>
        We are aiming to launch at high schools in Spring 2020.
      </text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        {_getButton("http://blubag.co", 120, "Website")}
        {_getButton("https://imgur.com/a/OEh9DK3", 200, "App Screenshots")}
      </div>
    </div>
  );
};

const _snackpass = () => {
  return (
    <div style={{ ...styles.subContainer }}>
      <text style={styles.normalText}>
        During the Summer of 2018 I worked at Snackpass, a{" "}
        <text style={{ color: orange, fontWeight: "500" }}>YC/a16z</text>-backed
        food startup specializing in optimizing the restaurant take-out
        experience. Following this, I took a semester off during Fall 2018 to
        work as their first full-time software engineer in Berkeley, CA.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        At Snackpass I led development on a new app to allow restaurant owners
        to monitor growth analytics and respond to food complaints (
        <text style={{ color: orange, fontWeight: "500" }}>React Native</text>,{" "}
        <text style={{ color: orange, fontWeight: "500" }}>Node.js</text>,{" "}
        <text style={{ color: orange, fontWeight: "500" }}>
          SendBird Messaging API
        </text>
        ). Additionally, I helped build new features for the user-facing app,
        the restaurant-facing point of sales app, and various internally and
        externally-facing dashboards.
      </text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        {_getButton("http://snackpass.co", 120, "Website")}
      </div>
    </div>
  );
};

const _resnet = () => {
  return (
    <div style={{ ...styles.subContainer }}>
      <text style={styles.normalText}>
        Resistor Net is a convolutional neural network trained using{" "}
        <text style={{ color: orange, fontWeight: "500" }}>TensorFlow</text> to
        identity resistor values from an image of a resistor. Resistors are
        small electrical components with resistance values encoded by 4 colored
        bands that are typically cumbersome to read.
      </text>
      <text style={{ ...styles.normalText, marginTop: 10 }}>
        For this project I collected and labeled resistor images and utilized
        data augmentation techniques to construct a suitably large resistor
        image data set. I then iteratively designed a novel two-stage
        convolutional neural network for resistor value identification,
        experimenting with a variety of models and architectures.
      </text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        {_getButton(
          "https://drive.google.com/file/d/1Nn0zm-EidAa-z-BxhDBtIvNRHxQxNyvV/view",
          200,
          "Read the Paper!"
        )}
      </div>
    </div>
  );
};

const _grapher = () => {
  return (
    <div style={{ ...styles.subContainer }}>
      <text style={styles.normalText}>
        3D Grapher is an app for graphing Cartesian, Cylindrical, Spherical, and
        Parametric graphs in 3D. I originally developed the app in{" "}
        <text style={{ fontWeight: "500", color: orange }}>Objective-C</text>{" "}
        but updated the app in{" "}
        <text style={{ fontWeight: "500", color: orange }}>Swift</text> for a
        later update. 3D Grapher has recieved over{" "}
        <text style={{ fontWeight: "500" }}>60,000</text> downloads on the App
        Store as well as overwhelmingly positive reviews (
        <text style={{ fontWeight: "500" }}>4.7 stars out of 5</text>) from over
        75 users.
      </text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        {_getButton(
          "https://github.com/vikrammullick/3D-Grapher-Swift",
          120,
          "GitHub"
        )}
        {_getButton("https://imgur.com/a/Sr5TshM", 200, "App Screenshots")}
      </div>
    </div>
  );
};

// const _regression = () => {
//   return (
//     <div style={{ ...styles.subContainer }}>
//       <text style={styles.normalText}></text>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "flex-end",
//           marginTop: 25,
//           marginBottom: 10
//         }}
//       >
//         {/* {_getButton(
//           "https://github.com/vikrammullick/Regression-Calc-v2",
//           120,
//           "GitHub"
//         )} */}
//         {_getButton("https://imgur.com/a/eT99Qlp", 200, "App Screenshots")}
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.subContainer}>
        {_name("Vikram Mullick")}
        {_header("About")}
        {_about()}
        {_header("Skills")}
        {_languages()}
        {_frameworks()}
        {_header("Experience & Projects")}
        {_projecHeader("Snackpass", snackpass, 0)}
        {_snackpass()}
        {_projecHeader("BluBag", logo, 0)}
        {_blubag()}
        {_projecHeader("Resistor Net", resnet, 0)}
        {_resnet()}
        {_projecHeader("3D Grapher", grapher, 12.5)}
        {_grapher()}
        {/* {_projecHeader("Regression Calc", regression, 12.5)}
        {_regression()} */}
        {/* {_projecHeader("Extrio", pcb, 0)} */}
        {_divider()}
        {_contact()}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "block",
    maxWidth: 800 - 30 * 2,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 50,
    paddingBottom: 50,
    margin: "auto",
  },
  subContainer: { display: "flex", flexDirection: "column" },
  header: {
    fontFamily: "Avenir Next",
    fontWeight: "400",
    fontSize: 35,
    marginTop: 50,
    color: darkGray,
  },
  name: {
    fontFamily: "Avenir Next",
    fontWeight: "500",
    fontSize: 50,
    alignSelf: "center",
  },
  divider: {
    height: 1,
    width: "100%",
    background: "gray",
    marginTop: 25,
    marginBottom: 25,
  },
  normalText: {
    fontFamily: "Avenir Next",
    fontWeight: "400",
    fontSize: 24,
  },
};
export default App;
