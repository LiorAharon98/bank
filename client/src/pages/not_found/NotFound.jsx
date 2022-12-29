import React from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import { useDataProvider } from "../../context/Data";
import styles from "./not_found.module.css";
const NotFound = () => {
  const { changeLanguage } = useDataProvider();
  return (
    <Card>
      <div className={styles.container}>
        <h1 id={styles.text}>{changeLanguage("this route is not exist please go back to homepage")}</h1>
        <Button to={"/"} text={"homepage"} />
      </div>
    </Card>
  );
};

export default NotFound;
