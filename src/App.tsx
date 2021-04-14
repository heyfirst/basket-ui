import React from "react";
import DocumentPage from "./components/DocumentPage";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <main className="pl-72 main-wrapper">
        <DocumentPage />
      </main>
    </div>
  );
};

export default App;
