import React, { useState } from "react";
import ModuleList from "./components/ModuleList/ModuleList";
import "./App.css";

const App = () => {
  const [modules, setModules] = useState([]);

  const addModule = (title) => {
    setModules([...modules, { id: Date.now(), title, resources: [] }]);
  };

  const updateModules = (updatedModules) => {
    setModules(updatedModules);
  };

  return (
    <div className="App">
      <ModuleList
        modules={modules}
        setModules={updateModules}
        addModule={addModule}
      />
    </div>
  );
};

export default App;
