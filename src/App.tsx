import React from 'react';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-wrapper">
        <div>Hi</div>
      </div>
    </div>
  );
};

export default App;
