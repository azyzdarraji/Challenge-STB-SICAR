import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import close from "../../images/close.png";
import menu from "../../images/menu.png";
import logoStbSicar from "../../images/Logo STB SICAR.png";

const NavBar = () => {
  return (
    <nav>
      <img src={logoStbSicar} className="logo" alt="stb" />
      <div className="nav-links" id="navLinks">
        <img className="close" src={close} alt="close" onclick="hideMenu()" />
        <ul>
          <li>
            <Link to="/" className="Link">
              {" "}
              <p>Nous Connaître</p>
            </Link>
          </li>
          <li>
            <Link to="/nosfonds" className="Link">
              {" "}
              <p> Nos Fonds</p>
            </Link>
          </li>
          <li>
            <Link to="/responsablitesociale" className="Link">
              <p> Responsabilité Sociale </p>
            </Link>
          </li>
          <li>
            <Link to="/nosreaclisations" className="Link">
              {" "}
              <p> Nos Réalisations </p>
            </Link>
          </li>
          <li>
            <Link to="/actualites" className="Link">
              <p>Actualités </p>
            </Link>
          </li>
          <li>
            <Link to="contact" className="Link">
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link to="lexique" className="Link">
              <p>Lexique</p>
            </Link>
          </li>
        </ul>
      </div>
      <img className="menu" src={menu} alt="menu" onclick="showMenu()" />
    </nav>
  );
};

export default NavBar;
