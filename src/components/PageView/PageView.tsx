import { ActivePageContext } from "@/context/ActivePageContext";
import { useContext } from "react";
import {
  Chat,
  Profile,
  Progress,
  Server,
  Settings,
  Todos,
  Whiteboard,
} from "../../pages";
import styles from "./PageView.module.scss";

const PageView = () => {
  const pageContext = useContext(ActivePageContext);

  let Page;
  switch (pageContext?.pageId) {
    case "profile":
      Page = <Profile />;
      break;
    case "server":
      Page = <Server />;
      break;
    case "progress":
      Page = <Progress />;
      break;
    case "chat":
      Page = <Chat />;
      break;
    case "whiteboard":
      Page = <Whiteboard />;
      break;
    case "todo":
      Page = <Todos />;
      break;
    case "setting":
      Page = <Settings />;
      break;
    default:
      break;
  }

  return (
    <div className={styles["page--view"]}>
      {Page}
    </div>
  );
};

export default PageView;
