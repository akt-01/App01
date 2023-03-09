import { createContext, useState } from "react";

export type ActivePageId =
  | "profile"
  | "server"
  | "progress"
  | "chat"
  | "whiteboard"
  | "todo"
  | "setting";

type ActivePageContextType = {
  pageId: ActivePageId;
  setPageId: React.Dispatch<React.SetStateAction<ActivePageId>>;
};

export const ActivePageContext = createContext<ActivePageContextType | null>(
  null
);

type ActivePageContextProviderProps = {
  children: React.ReactNode;
};

const ActivePageContextProvider = ({
  children,
}: ActivePageContextProviderProps) => {
  const [activePageId, setActivePageId] = useState<ActivePageId>("profile");

  return (
    <ActivePageContext.Provider
      value={{ pageId: activePageId, setPageId: setActivePageId }}
    >
      {children}
    </ActivePageContext.Provider>
  );
};

export default ActivePageContextProvider;
