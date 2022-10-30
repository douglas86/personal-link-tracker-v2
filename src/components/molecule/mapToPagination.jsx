import { alert } from "../atom";

import styles from "../../../styles/components/molecule/mapToPagination.module.css";

export const mapToPagination = (items) => (
  <>
    {alert(
      "secondary",
      <>
        <h1>{items.title}</h1>
        <p>createdBy: {items.userName}</p>
        <hr />
        <p>URL: {items.url}</p>
        <hr />
        <div className={styles.flex}>
          <div className={styles.flexWidth}>
            <div className={styles.width}>
              {items.type === "Free" ? (
                <div className={styles.flex}>
                  <p className={styles.fontColor}>{items.type}</p>
                  <p>/Paid</p>
                </div>
              ) : (
                <div className={styles.flex}>
                  <p>Free/</p>
                  <p className={styles.fontColor}>{items.type}</p>
                </div>
              )}
            </div>
            <div style={{ width: "50%" }}>
              {items.medium === "Books" ? (
                <div className={styles.flex}>
                  <p className={styles.fontColor}>{items.medium}</p>
                  <p>/Video</p>
                </div>
              ) : (
                <div className={styles.flex}>
                  <p>Books/</p>
                  <p className={styles.fontColor}>{items.medium}</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.textAlign}>
            <p>{items.clicks} clicks</p>
          </div>
        </div>
      </>
    )}
  </>
);
