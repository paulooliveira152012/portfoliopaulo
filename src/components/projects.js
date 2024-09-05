import React from "react";
import styles from "../styles/style";

const Projects = () => {
  return (
    <div style={styles.projectsContainer}>

   {/* Hikari Project */}
   <div className="projectContainerWide" style={styles.projectContainerWide}>
      <a
          href="https://hikarishopx-e0ede5b8b8e6.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="projectLink"
        >
        <div className="imageContainer hikari"></div>
            </a>
            <div style={styles.projectDescription}>
              <p>
                <strong>Hikari</strong>
              </p>
              <p>
                I developed a full-stack web application using React for a
                dynamic and responsive user interface, Node.js and Express.js
                for a robust backend, and MongoDB for scalable data storage. The
                app integrates Python scripts for data preprocessing, AWS for
                secure cloud storage with S3 buckets, and is deployed on Heroku
                with CI/CD pipelines using GitHub Actions to ensure continuous
                delivery and high performance.
              </p>
            </div>
      </div>

      {/* La Union Project */}
      <div className="projectContainerWide" style={styles.projectContainerWide}>
        <a
          href="https://paulooliveira152012.github.io/launiontireinc/"
          target="_blank"
          rel="noreferrer"
          className="projectLink"
          style={styles.projectLink}
        >
          <div className="imageContainer laUnionImg" style={{ ...styles.imageContainer, ...styles.laUnionImg }}></div>
        </a>
        <div className="projectDescription" style={styles.projectDescription}>
          <p>
            <strong>La Union Tire Inc.</strong>
          </p>
          <p>
            La Union Tire Inc. is a tire shop with a landing page built using HTML, JavaScript, and CSS. It provides essential information about services and invites visitors to explore further.
          </p>
        </div>
      </div>

      {/* Weather App Project */}
      <div className="projectContainerWide" style={styles.projectContainerWide}>
        <a
          href="https://paulooliveira152012.github.io/weather/"
          target="_blank"
          rel="noreferrer"
          className="projectLink"
          style={styles.projectLink}
        >
          <div className="imageContainer weatherApp" style={{ ...styles.imageContainer, ...styles.weatherApp }}></div>
        </a>
        <div className="projectDescription" style={styles.projectDescription}>
          <p>
            <strong>Weather App</strong>
          </p>
          <p>
            Weather Dashboard: A web application utilizing HTML, CSS, and JavaScript to fetch real-time weather data via the OpenWeatherMap API. Users can search cities, view climate information, revisit searches, and manage a history of previous queries.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Projects;
