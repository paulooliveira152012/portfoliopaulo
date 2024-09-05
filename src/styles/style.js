// style.js

// import myPicture1 from "../images/mypicture1.jpeg";
import myPicture2 from "../images/mypicture2.jpeg"

// import image for the about me page
import myImageAboutPage from "../images/mypicture1.jpeg"

// font create and export font from google
export const globalStyle = {
  fontFamily: "'Inconsolata', monospace",
};

export const textStyle = {
  fontFamily: "'Inconsolata', monospace",
  fontSize: "16px", // Example font size
  color: "#333", // Example color
};

const styles = {

  allContent: {
    backgroundColor: "black",
    color: "white",
  },

  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },

  fullScreenContentContainer: {
    flex: 1,
  },

  body: {
    fontFamily: "'Arial', sans-serif", // Consistent font style
    backgroundColor: "black",
  },

  displayPage: {
    color: "white",
    backgroundColor: "black",
    display: "flex",
    height: "50px",
    alignItems: "center",
    padding: "30px"
  },

  displayItem: {
    marginRight: "20px",
    cursor: "pointer"
  },

  projectsContainer: {
    display: "flex",
    flexDirection: "column", // Retain column direction if preferred, or remove this if you want to keep it horizontal
    overflowX: "auto", // Enables horizontal scrolling
    height: "auto",
    backgroundColor: "black", // Background color from the second style
    gap: "40px", // Space between projects
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    
  },

  projectContainerWide: {
    backgroundColor:"black",
    width: "100%",
    padding: "20px",
    borderRadius: "10px"
  },

  projectDescription: {
    fontSize: "16px",
    color: "white",
    lineHeight: "2em",
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  projectContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderRadius: 10,
    backgroundColor: "black",
    width: "100%",
    // margin: 20,
    // flexDirection: "column",
    // justifyContent: "center"
    // paddingTop: "2%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for depth
    // backgroundColor: "green",
    color: "white"
  },

  projectContainerDiv: {
    flex: 1,
    margin: "10px",
  },


  projectContent: {
    // backgroundColor: "blue",
    display: "flex",
    flex: 1,
    
  },


  
    hikari: {
    backgroundImage: "url('../images/projectsScreenshot/hikari.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginBottom: "20px",
  },


  projectImg: {
    width: "500px",
    margin: "10px 20px",
    // padding: "20px",
    // height: "auto",
    // backgroundColor: "red",
    height: "auto",
    borderRadius: 10
  },

  projectParagraph: {
    margin: "20px",
    // color: "#EEEEEE",
    textAlign: "justify",
  },





  paragraph: {
    fontSize: "16px",
    color: "#333",
  },

  

  // header
  list: {
    display: "flex",
    listStyle: "none",
    float: "right",
  },

  a: {
    marginRight: "20px",
    color: "white",
    textDecoration: "none",
  },

  aProjects: {
    // marginRight: "20px",
    // color: "white",
    textDecoration: "none",
  },

  hero: {
    width: "100%",
    height: "50vh",
    display: "flex",
    // backgroundImage: `url(${myPicture})`,
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundPosition: "80% center", // Adjust the horizontal position to push to the right
    flex: 1,
    justifyContent: "flex-end"
  },

  heroContainer: {
    fontSize: "20px",
    // textAlign: "left",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    // backgroundColor: "green",
  },

  left: {
    flex: 1,
    // backgroundColor: "green",
  },



  imageContainerBoth: {
    height: "300px",
    margin: "20px",
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "space-evenly"

  },

  myPicture1: {
    backgroundImage: `url(${myPicture2})`,
    backgroundSize: "140%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "50%",
    // marginTop: "20px"
  },

  textContainer: {
    // height: "300px",
    margin: "20px",
    // backgroundColor: "white",
    fontSize: "15px",
    textAlign: "justify",
    // display: "flex",
    flexDirection: "column",
    // height: "100%",
    // justifyContent: "space-evenly",
  },

  textLeft: {
    // margin: "20px",
    fontSize: "15px",
    display: "flex",
    alignItems: "center", // This centers the content horizontally in the flex container
    justifyContent: "center", // This centers the content vertically in the flex container
    textAlign: "center",
    color: "#EEEEEE",
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", // Adds an outline
  },

  right: {
    flex: 1,
  },

  

  pictureContainer: {
    flex: 1,
    position: "absolute",
  },

  myPicture: {
    height: "auto",
    position: "relative",
  },


  horizontal: {
    display: "flex",
    // backgroundColor: "red",
    padding: "40px"
  },


  vertical: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "green",
    height: "100%",
  },

  myImageContainer: {
    display: "flex",
    backgroundColor: "purple",
    alignItems: "center",
    // height: "auto"
    padding: "4%",
  },

  myImage: {
    backgroundImage: `url(${myImageAboutPage})`,
    width: "70%",
    aspectRatio: 1,
    backgroundSize: "cover",
    backgroundPosition: "center 25%", // Adjusts vertical position
    borderRadius: "50%",
    flex: 1, // Keep if used within a flex container
  },

  

  //   story session
  writtenContent: {
    textAlign: "justify",
    // margin: "20px 10px",
    padding: "20px",
    // backgroundColor: "#222831",
    // borderRadius: 20,
    fontSize: 20,
    flex: 1,
    color: "#222831",
    display: "flex",
  },

  allLogos: {
    display: "flex",
    justifyContent: "space-evenly"
  },


  //   footer
  footer: {
    height: "300px",
    backgroundColor: "black",
    color: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  footerContainer: {    
    margin: "auto"
  },

  footerSocialContainer: {
    backgroundColor: "green",
    width: "auto"
  },

  footerSocial: {
    display: "flex",
    margin: "auto",
  },

  footerList: {
    listStyle: "none",
  },

  h2: {
    margin: "20px ",
  },
  
};

export default styles;
