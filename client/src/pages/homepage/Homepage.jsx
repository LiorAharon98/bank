import styles from "./homepage.module.css";
import Footer from "../../components/footer/Footer";
import { Animate } from "react-simple-animate";
const Homepage = () => {
  const test = () => {
    let strArr = 'the quick brown fox jumps over the lazy dog.'.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let i = 0; i < alphabet.length; i++) {
      if (strArr.indexOf(alphabet[i]) < 0) {
        return false;
      }
    }
    return true;
  };
  console.log(test());
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
