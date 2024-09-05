import React, {useState, useEffect } from "react"
import styles from "../styles/style"
import { useNavigate } from "react-router-dom"



const UpperHeader = () => {
    const [corDaCasa, seCorDaCasa] = useState('Preta') 
    const navigation = useNavigate()


    const handleHomeClick = () => {
        console.log('Exibindo Home page')
        navigation('/')
    }

    const handleAboutMeClick = () => {
        console.log("Exibindo About me Page")
        navigation('aboutMe')
    }

    useEffect(() => {
        // console.log('a cor da casa e ', corDaCasa)
    })

    return (
        <div style={styles.displayPage}>
            <p style={styles.displayItem} onClick={handleHomeClick}>
                Home
            </p>
            <p style={{...styles.displayItem, cursor:"default"}}>
                |
            </p>
            <p style={styles.displayItem} onClick={handleAboutMeClick}>
                About Me
            </p>
        </div>
    )
}

export default UpperHeader