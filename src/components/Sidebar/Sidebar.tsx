import { ActivePageContext, ActivePageId } from "@/context/ActivePageContext";
import { useState, useContext } from "react";
import "./Sidebar.scss";
import { SidebarData } from "./sidebarData";

const Sidebar = () => {
  const pageContext = useContext(ActivePageContext);

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      {SidebarData.map((item, idx) => {
        if (item.isSpacer)
          return <div key={idx} className="sidebar--item-spacer"></div>;

        if (item.isCollapseButton)
          return (
            <div
              key={idx}
              className="sidebar--item"
              onClick={() => setIsExpanded((prevState) => !prevState)}
            >
              <div className="sidebar--item-icon collapse-icon">
                <item.icon />
              </div>
              <span className="sidebar--item-title">{item.title}</span>
            </div>
          );

        if (!item.icon || !item.id || !item.title)
          throw new Error("Icon, Id or the Title is missing");

        return (
          <div
            key={idx}
            className={`sidebar--item ${
              pageContext?.pageId === item.id ? "active" : ""
            }`}
            onClick={() => {
              pageContext?.setPageId(item.id as ActivePageId);
              setIsExpanded(false);
            }}
          >
            <div className="sidebar--item-icon">
              <item.icon />
            </div>
            <span className="sidebar--item-title">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
