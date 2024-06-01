import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import "./Module.css";
import { MdCancel } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { SiAdobeacrobatreader } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
const Module = ({ module, setModules, modules }) => {
  const [title, setTitle] = useState(module.title);
  const [link, setLink] = useState(module.addLink);
  const [file, setFile] = useState(module.addFile);
  const [mod, setMod] = useState(module.addModule);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRenameCard, setShowRenameCard] = useState(false);
  const [showLinkRenameCard, setShowLinkRenameCard] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newLink, setNewLink] = useState("");

  const handleRename = () => {
    if (newTitle.trim()) {
      const updatedModules = modules.map((m) =>
        m.id === module.id ? { ...m, title: newTitle } : m
      );
      setModules(updatedModules);
      setTitle(newTitle);
      setNewTitle("");
      setShowRenameCard(false);
      setMenuOpen(false);
    }
  };
  const handleLinkRename = () => {
    if (newLink.trim()) {
      const updatedModules = modules.map((m) =>
        m.id === module.id ? { ...m, addLink: newLink } : m
      );
      setModules(updatedModules);
      setLink(newLink);
      setNewLink("");
      setShowLinkRenameCard(false);
      setMenuOpen(false);
    }
  };
  const handleDelete = () => {
    const updatedModules = modules.filter((m) => m.id !== module.id);
    setModules(updatedModules);
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleRenameCard = () => {
    setShowRenameCard(!showRenameCard);
    setMenuOpen(false);
  };
  const toggleLinkRenameCard = () => {
    setShowLinkRenameCard(!showLinkRenameCard);
    setMenuOpen(false);
  };
  const handleClose = () => {
    setShowRenameCard(false);
    setShowLinkRenameCard(false);
  };

  return (
    <div className="module-wrapper">
      <div className="module-header">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            {link && (
              <>
                <div
                  style={{
                    backgroundColor: "#b3e8bd",
                    padding: 8,
                    borderRadius: 4,
                  }}
                >
                  <IoIosLink style={{ color: "green" }} />
                </div>
              </>
            )}
            {file && (
              <div
                style={{
                  backgroundColor: "#fae1e1",
                  padding: 8,
                  borderRadius: 4,
                }}
              >
                <SiAdobeacrobatreader style={{ color: "red" }} />
              </div>
            )}
            {mod && (
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: 8,
                  borderRadius: 4,
                }}
              >
                <IoMdArrowDropdown style={{ color: "gray" }} />
              </div>
            )}
            <div style={{ display: "grid" }}>
              <span>{title}</span>

              {link && (
                <a
                  href={link}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  className={``}
                >
                  Link
                </a>
              )}
              {file && (
                <a
                  href={link}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  className={``}
                >
                  {file}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <CiMenuKebab />
          {menuOpen && (
            <div className="menu-dropdown">
              <button onClick={toggleRenameCard}>Edit Module</button>
              {link && (
                <button onClick={toggleLinkRenameCard}>Edit Link</button>
              )}
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
      {showRenameCard && (
        <div className="rename-card">
          <div className="card-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h2>Edit Module</h2>
              <MdCancel
                style={{ transform: "scale(2)", cursor: "pointer" }}
                onClick={handleClose}
              />
            </div>
            <label style={{ padding: "10px 0px 10px 0px" }}>File name</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter new module title"
            />
            <div>
              <button onClick={handleRename}>Save Changes</button>
              <button onClick={toggleRenameCard}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showLinkRenameCard && (
        <div className="rename-card">
          <div className="card-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h2>Edit Link</h2>
              <MdCancel
                style={{ transform: "scale(2)", cursor: "pointer" }}
                onClick={handleClose}
              />
            </div>
            <label style={{ padding: "10px 0px 10px 0px" }}>New Link</label>
            <input
              type="text"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              placeholder="Enter new link"
            />
            <div>
              <button onClick={handleLinkRename}>Save Changes</button>
              <button onClick={toggleLinkRenameCard}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Module;
