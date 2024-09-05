// landingPage.js
import React from "react";
import Projects from "../components/projects";
import Content from "../components/content";
import Footer from "../components/footer";
import styles from "../styles/style";
import UpperHeader from "../components/UpperHeader";
import Header from "../components/Header"
import '../styles/estilo.css'

function LandingPage() {
  return (
    <div style={styles.allContent}>
      <Header />
      <Projects />
      {/* <Content /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
