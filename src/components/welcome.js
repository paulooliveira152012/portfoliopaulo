// welcome.js
import React, { useState, useEffect } from "react";
import styles from "../styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  // faLink
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faFile, faAlignLeft, faLink } from "@fortawesome/free-solid-svg-icons";
// import resume from "../docs/resumePaulo.pdf";
import resume from "../docs/paulodelacerdaoliveira.pdf"
const WelcomeMessage = () => {
  // State to control the text being displayed
  const [displayText, setDisplayText] = useState("");
  // State to control the visibility of social media icons
  const [showIcons, setShowIcons] = useState(false);

  // Define the full message parts
  const messageParts = [
    "Welcome to my portfolio!",
    "I'm Paulo Oliveira ",
    "Feel free to check out my work and get connected!  "
  ];

  // Function to simulate typing effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= messageParts.join(" ").length) {
        setDisplayText(messageParts.join(" ").substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Set showIcons to true after the message has been fully typed out
        setShowIcons(true);
      }
    }, 50); // Typing speed, adjust as needed

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  // Function to render message parts
  const renderMessageParts = () => {
    let remainingText = displayText;
    return messageParts.map((part, index) => {
      const partLength = part.length;
      const displayedPart = remainingText.substring(0, partLength);
      remainingText = remainingText.slice(partLength);
      
      let style = {};
      if (index === 1) {
        // Style for "I'm Paulo Oliveira."
        style = {
          color: "rgb(255, 255, 255)",
          fontFamily: "Arial, Helvetica, sans-serif",
          marginTop: "120px",
          marginLeft: "1%",
          fontSize: "2.5ch",
          fontWeight: "bold",
          // textAlign: "right",
        };
      } else {
        // Style for other texts
        style = {
          color: "rgb(255, 255, 255)",
          fontFamily: "Arial, Helvetica, sans-serif",
          // marginLeft: "1%",
          fontSize: "1.4ch",
          fontWeight: "0.1",
          marginBottom: "250px",
          lineHeight: "1.5",
          // textAlign: "right",
        };
      }
      
      return (
        <p
          key={index}
          style={{
            ...styles.textLeft,
            ...style,
            margin: "0" // Remove margin to prevent unwanted spacing
          }}
          className="textLeft"
        >
          {displayedPart}
        </p>
      );
    });
  };

  return (
    <div>
      {renderMessageParts()}
      {/* Social Media Icons */}
      {showIcons && (
        <div style={{ display: "flex", marginTop: "20px" }}>
          <a
            style={styles.a}
            href="https://www.linkedin.com/in/paulo-de-lacerda-oliveira-552677b7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            style={styles.a}
            href="https://github.com/paulooliveira152012"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            style={styles.a}
            href="https://www.instagram.com/your_instagram_username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="tel:+19086308458" style={styles.a} aria-label="Phone">
            <FontAwesomeIcon icon={faPhone} color="#EEEEEE" />
          </a>
          <a
            href="mailto:paulooliveira152012@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.a}
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#EEEEEE" />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.a}
            aria-label="Resume"
            download={resume}
          >
            <FontAwesomeIcon icon={faFile} color="#EEEEEE" />
          </a>

          {/* https://bold.pro/my/paulo-delacerdaoliveira */}

          <a
            href={"https://bold.pro/my/paulo-delacerdaoliveira"}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.a}
            aria-label="Resume"
            download={resume}
          >
            <FontAwesomeIcon icon={faLink} color="#EEEEEE" />
          </a>
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;
