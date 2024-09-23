import React, {useState} from "react"
import styles from "../styles/style"
import { useNavigate } from "react-router-dom"

const UpperHeader = () => {
    const [home, setHome] = useState(true) 
    const [aboutMe, setAboutMe] = useState(null) 
    const navigation = useNavigate()

    const handleHomeClick = () => {
        console.log('Exibindo Home page')
        setHome(true)
        setAboutMe(false)
        navigation('/')
    }

    const handleAboutMeClick = () => {
        console.log("Exibindo About me Page")
        setAboutMe(true)
        setHome(false)
        navigation('aboutMe')
    }


    return (
        <div style={styles.displayPage}>
            <p
                style={{
                    ...styles.displayItem,
                    color: home ? "white" : "rgba(255, 255, 255, 0.4)",
                    cursor: "pointer",
                    fontStyle: home ? "italic" : "normal"
                }} 
                onClick={handleHomeClick} 
            >
                Home
            </p>
            <p style={{...styles.displayItem, cursor:"default"}}>
                |
            </p>
            <p style={{
                ...styles.displayItem,
                color: aboutMe ? "white" : "rgba(255,255,255, 0.4",
                cursor: "pointer",
                fontStyle: aboutMe ? "italic" : "normal"
            }} 
            onClick={handleAboutMeClick}>
                About Me
            </p>
        </div>
    )
}

export default UpperHeader