import React, { useState } from "react";
import "./Header.css";
import { FaSortDown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { TfiUpload } from "react-icons/tfi";
import { IoIosLink } from "react-icons/io";
import { LiaDatabaseSolid } from "react-icons/lia";

const Header = ({
  onToggleAddModule,
  onAddResource,
  onToggleAddLink,
  modules,
  setModules,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAddModule = () => {
    onToggleAddModule();
    setMenuOpen(false);
  };

  const handleAddResource = () => {
    onAddResource();
    setMenuOpen(false);
  };

  const handleLinkAdder = () => {
    onToggleAddLink();
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <h1>Course Builder</h1>
      <div className="add-button" onClick={toggleMenu}>
        <IoMdAdd />
        <span>Add</span>
        <FaSortDown style={{ paddingBottom: "10px" }} />
        {menuOpen && (
          <div className="dropdown-menu">
            <div
              onClick={handleAddModule}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span>
                <LiaDatabaseSolid style={{ color: "gray" }} />
              </span>
              Create Module
            </div>
            <div
              onClick={handleLinkAdder}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span>
                <IoIosLink style={{ color: "gray" }} />
              </span>
              Add a link
            </div>
            <div
              onClick={handleAddResource}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span>
                <TfiUpload style={{ color: "gray" }} />
              </span>
              Upload
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
