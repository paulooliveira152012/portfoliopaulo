import React, { useState, useEffect } from "react";
import styles from "../styles/style";
import { useNavigate, useLocation } from "react-router-dom";

const UpperHeader = () => {
  const navigation = useNavigate();
  const location = useLocation(); // Get the current path

  // Determine the initial state based on the current path
  const [home, setHome] = useState(location.pathname === "/");
  const [aboutMe, setAboutMe] = useState(location.pathname === "/aboutMe");

  // Update state based on the current location when the component mounts or the location changes
  useEffect(() => {
    if (location.pathname === "/") {
      setHome(true);
      setAboutMe(false);
    } else if (location.pathname === "/aboutMe") {
      setHome(false);
      setAboutMe(true);
    }
  }, [location.pathname]);

  const handleHomeClick = () => {
    console.log("Exibindo Home page");
    setHome(true);
    setAboutMe(false);
    navigation("/");
  };

  const handleAboutMeClick = () => {
    console.log("Exibindo About Me page");
    setAboutMe(true);
    setHome(false);
    navigation("/aboutMe");
  };

  return (
    <div style={styles.displayPage}>
      <p
        style={{
          ...styles.displayItem,
          color: home ? "white" : "rgba(255, 255, 255, 0.4)",
          cursor: "pointer",
          fontStyle: home ? "italic" : "normal",
        }}
        onClick={handleHomeClick}
      >
        Home
      </p>
      <p style={{ ...styles.displayItem, cursor: "default" }}>|</p>
      <p
        style={{
          ...styles.displayItem,
          color: aboutMe ? "white" : "rgba(255,255,255, 0.4)",
          cursor: "pointer",
          fontStyle: aboutMe ? "italic" : "normal",
        }}
        onClick={handleAboutMeClick}
      >
        About Me
      </p>
    </div>
  );
};

export default UpperHeader;
