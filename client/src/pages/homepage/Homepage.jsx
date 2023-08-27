import styles from "./homepage.module.css";
import Footer from "../../components/footer/Footer";
import { Animate } from "react-simple-animate";
const Homepage = () => {

  return (
    <>
      <div className={styles.container}>
        <Animate duration={0.5} play start={{ width: 0 }} end={{ width: "50%" }}>
          <div className={styles.side_bar}></div>
        </Animate>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
