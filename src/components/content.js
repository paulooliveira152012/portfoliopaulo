import React from "react";
import styles from "../styles/style";
import Badge from "./badge";
import "../styles/estilo.css";
import Logos from "../components/techlogos";
import "../images/techLogos/logos.css"

const Content = () => {
  return (
    <div style={{...styles.main, background:"black", color: "white"}} className="contentMain">
      <div style={styles.horizontal} className="horizontal">
        <div style={styles.left}>
          <div style={styles.textContainer}>
      <h2 style={styles.h2}>Know what I can do:</h2>
            <p style={ styles.aboutMe }>
              As a full-stack developer with tree years of experience having graduated from the fullstack web development bootcamp at Rutgers University, I have
              honed a broad skill set across web and mobile application
              development. My front-end capabilities include creating responsive
              and dynamic interfaces with HTML5, CSS, JavaScript, Bootstrap, and
              React. On the back-end, I am proficient in Node.js, Express, and
              MongoDB. I am also developing my mobile skills using React Native
              to ensure seamless integration between front-end and back-end
              operations. Additionally, I have experience with AJAX API
              interactions, Git, MERN stack, MySQL, AWS S3, progressive web
              applications (PWAs), and user authentication.
            </p>
          </div>
        <div className="logosContainerSmallScreen">
        <Logos />
        </div>
        <div className="logosContainerBigScreen">
        <Logos />
        </div>
        </div>


        <div style={styles.right} className="right hidePhoto">
          <div style={styles.imageContainerBoth}>
            <div style={styles.myPicture1} className="myPicture1"></div>
            <div className="invisibleBadge">
              <Badge />
            </div>
          </div>
        </div>
      </div>

      

      <div style={styles.horizontal} className="horizontal">
        <div style={styles.left}>
          <div style={styles.imageContainer} className="imageContainer, badge">
            <Badge />
          </div>
        </div>
        <div style={styles.right} className="right">
          <div style={styles.textContainer}>
          <h2 style={styles.h2}>Get to know me a little!</h2>
            <p style={ styles.aboutMe }>
              In addition to my development work, I have managed projects at
              Grads, transforming the startup founder's vision into functional
              designs that align both front-end presentation and back-end
              functionality. Currently, I further my expertise by creating a web
              and mobile application for a start up company im Brazil called
              Hiroku getting exposed to new technologies such as Python, Heroku
              and Vercel. I am passionate about tackling new coding challenges
              and continually adapting to advance in the tech industry. I would
              be thrilled to bring my dedication and quality work to your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
