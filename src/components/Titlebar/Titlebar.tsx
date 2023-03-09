import styles from "./Titlebar.module.scss";
import { TbMinus, TbSquare, TbX } from "react-icons/tb";
import { ipcRenderer } from "electron";

const Titlebar = () => {
  const minimizeApp = (): void => {
    ipcRenderer.send("minimizeApp");
  };
  const maximizeApp = (): void => {
    ipcRenderer.send("maximizeApp");
  };
  const closeApp = (): void => {
    ipcRenderer.send("closeApp");
  };

  return (
    <div className={styles.titlebar}>
      <div className={styles["titlebar-title"]}>Tracker</div>
      <div className={styles["titlebar-controls"]}>
        <div className={styles["titlebar-controls-icon"]} onClick={minimizeApp}>
          <TbMinus />
        </div>
        <div className={styles["titlebar-controls-icon"]} onClick={maximizeApp}>
          <TbSquare />
        </div>
        <div className={styles["titlebar-controls-icon"]} onClick={closeApp}>
          <TbX />
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
