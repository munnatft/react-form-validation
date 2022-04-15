import styles from  "../App.module.css";

const Wrapper = ({ children }) => {
  return (
    <div className={styles["wrapper-box"]}>
      <div className={styles["wrapper"]}>{children}</div>
    </div>
  );
};

export default Wrapper;
