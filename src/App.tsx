import { PageView, Sidebar, Titlebar } from "./components/";
import ActivePageContextProvider from "./context/ActivePageContext";

function App() {
  return (
    <div className="App system">
      <Titlebar />
      <main>
        <ActivePageContextProvider>
          <Sidebar />
          <PageView />
        </ActivePageContextProvider>
      </main>
    </div>
  );
}

export default App;
