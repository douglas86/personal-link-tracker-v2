import styles from "../../../styles/components/atom/formErrors.module.css";

export const formErrors = (typeOfErrors, message) =>
  typeOfErrors && <p className={styles.p}>{message}</p>;
