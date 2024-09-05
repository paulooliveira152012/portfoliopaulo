import styles from "../styles/style"

const UpperHeader = () => {
    return (
        <div style={styles.displayPage}>
            <p style={styles.displayItem}>
                Home
            </p>
            <p style={styles.displayItem}>
                |
            </p>
            <p style={styles.displayItem}>
                Contact
            </p>
        </div>
    )
}

export default UpperHeader