import React, { useState } from "react";
import "../styles/header.css";
import "../input.css";
import Menu from "./menu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => setMenu(!menu);

  return (
    <div>
      <img
        className={menu ? "button-hover2" : "button-hover"}
        src={
          menu
            ? "https://i.imgur.com/MppiFV5.png"
            : "https://i.imgur.com/UJdk3Hp.png"
        }
        onClick={openMenu}
      />
      <div className="header h-20 p-3 bg-gradient-to-r sticky top-0 w-full">
        <a className="inline-block font-bold text-5xl px-10 custom-text">
          Keman Nguyen
        </a>
      </div>
      <div className={menu ? "menu-box-active" : "menu-box"}>
        <Menu />
      </div>
      <div className="page-line">
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
        <div style={{ marginBottom: -17 }}>|</div>
      </div>
    </div>
  );
};

export default Header;
