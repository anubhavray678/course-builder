import React, { useState } from "react";
import Module from "../Module/Module";
import Header from "../Header/Header";
import noModulesImage from "../../assets/home.png";
import "./ModuleList.css";
import { MdCancel } from "react-icons/md";

const ModuleList = ({ modules, setModules, addResource }) => {
  const [showAddModuleCard, setShowAddModuleCard] = useState(false);
  const [showResourceCard, setShowResourceCard] = useState(false);
  const [showAddLinkCard, setShowAddLinkCard] = useState(false);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [link, setLink] = useState("");

  const handleAddModule = () => {
    if (newModuleTitle.trim()) {
      setModules([
        ...modules,
        {
          id: Date.now(),
          title: newModuleTitle,
          addModule: newModuleTitle,
          resources: [],
        },
      ]);
      setNewModuleTitle("");
      setShowAddModuleCard(false);
    }
  };
  const handleAddLink = () => {
    if (displayName.trim()) {
      setModules([
        ...modules,
        { id: Date.now(), title: displayName, addLink: link, resources: [] },
      ]);
      setDisplayName("");
      setShowAddLinkCard(false);
    }
  };
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setModules([
        ...modules,
        {
          id: Date.now(),
          title: file.name,
          addFile: file.type,
          type: "file",
          file,
          resources: [],
        },
      ]);
      setShowResourceCard(false);
    }
  };

  const toggleAddModuleCard = () => {
    setShowAddModuleCard(!showAddModuleCard);
  };
  const toggleAddLinkCard = () => {
    setShowAddLinkCard(!showAddLinkCard);
  };
  const toggleResourceCard = () => {
    setShowResourceCard(!showResourceCard);
  };

  const handleClose = () => {
    setShowAddModuleCard(!showAddModuleCard);
  };
  const handleCloseResource = () => {
    setShowResourceCard(!showResourceCard);
  };

  return (
    <div className="module-list-container">
      <Header
        onToggleAddModule={toggleAddModuleCard}
        onToggleAddLink={toggleAddLinkCard}
        onAddResource={toggleResourceCard}
      />
      {modules.length === 0 ? (
        <div className="no-modules">
          <img src={noModulesImage} alt="No modules" />
          <p>Click on the [+] Add button to add items to this course</p>
        </div>
      ) : (
        <div className="modules-list">
          {modules.map((module) => (
            <Module
              key={module.id}
              module={module}
              setModules={setModules}
              modules={modules}
              type={module.type || "default"}
            />
          ))}
        </div>
      )}
      {showAddModuleCard && (
        <div className="add-module-card">
          <div className="card-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",

                width: "100%",
              }}
            >
              <h2>Create New Module</h2>
              <MdCancel
                style={{ transform: "scale(2)", cursor: "pointer" }}
                onClick={handleClose}
              />
            </div>
            <label
              style={{
                paddingBottom: "10px",
                fontWeight: 700,
                paddingTop: "25px",
              }}
            >
              Module name
            </label>
            <input
              type="text"
              value={newModuleTitle}
              onChange={(e) => setNewModuleTitle(e.target.value)}
              placeholder="Enter module title"
            />
            <div
              style={{ display: "flex", justifyContent: "end", width: "100%" }}
            >
              <button onClick={handleAddModule}>Create</button>
              <button onClick={toggleAddModuleCard}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showAddLinkCard && (
        <div className="link-adder-card">
          <div className="card-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",

                width: "100%",
              }}
            >
              <h2>Add a New Link</h2>

              <MdCancel
                style={{ transform: "scale(2)", cursor: "pointer" }}
                onClick={toggleAddLinkCard}
              />
            </div>
            <label>URL</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter link URL"
            />
            <label>Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter link display name"
            />
            <div>
              <button onClick={handleAddLink}>Add</button>
              <button onClick={toggleAddLinkCard}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showResourceCard && (
        <div className="link-adder-card">
          <div className="card-content">
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                gap: 10,
              }}
            >
              <input type="file" onChange={handleUpload} />
              <MdCancel
                style={{
                  transform: "scale(2)",
                  cursor: "pointer",
                  paddingBottom: 5,
                }}
                onClick={handleCloseResource}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleList;
