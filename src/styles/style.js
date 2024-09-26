// style.js

// import myPicture1 from "../images/mypicture1.jpeg";
import myPicture2 from "../images/mypicture1.jpeg"

// import image for the about me page
import myImageAboutPage from "../images/mypicture1.jpeg"

// font create and export font from google
export const globalStyle = {
  fontFamily: "'Inconsolata', monospace",
};

export const textStyle = {
  fontFamily: "'Inconsolata', monospace",
  // fontSize: "30px", // Example font size
  // color: "#333", // Example color
};

const styles = {

  allContent: {
    backgroundColor: "black",
    color: "white",
  },

  logoContainer: {
    height: "20px",
    width: "100%",
    backgroundColor: "pink"
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
    cursor: "pointer",
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: "1.5ch",
    fontFamily: "Arial, Helvetica, sans-serif"

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
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    // backgroundColor: "green",
    marginRight: "10px"
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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `50% calc(50% + 35px)`, // Move image 20px lower
    height: "100%",
    aspectRatio: 1,
    borderRadius: "50%"
    // marginTop: "20px"
  },

  // textos about me:

  textContainer: {
    // height: "300px",
    // margin: "20px",
    // backgroundColor: "red",
    fontSize: "12px",
    textAlign: "justify",
    // display: "flex",
    flexDirection: "column",
    lineHeight: "1",
    // height: "100%",
    // justifyContent: "space-evenly",
    marginBottom: "20px"
  },

  aboutMe: {
    lineHeight: 1.5,
    marginTop: "15px",
  },

// TEXTO WELCOME
 textLeft: {
  fontSize: "12px",
  // backgroundColor: "red",
  display: "flex",
  justifyContent: "flex-start", // Alinha o conteúdo à esquerda no contêiner flex
  alignItems: "center", // Centraliza verticalmente dentro do contêiner
  textAlign: "left", // Alinha o texto à esquerda
  color: "#EEEEEE",
  textShadow:
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", // Adiciona contorno ao texto
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
    // backgroundColor: "green",
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
    margin: "0px ",
    // backgroundColor: "red"
  },
  
};

export default styles;
