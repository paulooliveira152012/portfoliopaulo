import styles from "../styles/style";
import WelcomeMessage from "./welcome";

const Header = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContainer}>
        <WelcomeMessage />
      </div>
    </div>
  );
};

export default Header;
