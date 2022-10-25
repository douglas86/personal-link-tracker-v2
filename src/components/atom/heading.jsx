import styles from "../../../styles/components/atom/titles.module.css";

export const heading = (string) => (
  <h1 className={styles.h1}>
    {string[0].toUpperCase() + string.slice(1).toLowerCase()}
  </h1>
);
