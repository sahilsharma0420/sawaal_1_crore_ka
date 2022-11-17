import React, { useState } from "react";
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [planning, setplanning] = useState(false);

  const handleclick = () => {
    setplanning(!planning);
  };
  const handleclose = () => {
    setplanning(false);
  };
  function hidesidemenu() {
    setShowMediaIcons = false;
  }
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img
            className="logopic"
            src="https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg"
            alt="location"
          ></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">About</NavLink>
            </li>
        
            <li>
              <div className="dropdown">
                <NavLink
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  onClick={handleclick}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Planning
                  <KeyboardArrowDownIcon />
                </NavLink>
                {planning && (
                  <div className="dropdown-container">
                    <ul
                      className="dropdown-menu"
                      style={{
                        backgroundColor: "rgb(1, 0, 1)",
                        display: "flex",
                        flexDirection: "column",
                        height: "170px",
                        width: "200px",
                        border:"1px solid rgb(255, 214, 1)"
                      }}
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <NavLink
                          style={{
                            backgroundColor: "rgb(1, 0, 1)",
                            color: "rgb(255, 214, 1)",
                          }}
                          onClick={handleclose}
                          className="dropdown-item"
                          to="/DreamCar"
                        >
                          DreamCar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          style={{
                            backgroundColor: "rgb(1, 0, 1)",
                            color: "rgb(255, 214, 1)",
                          }}
                          onClick={handleclose}
                          className="dropdown-item"
                          to="/DreamHome"
                        >
                          DreamHome
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          style={{
                            backgroundColor: "rgb(1, 0, 1)",
                            color: "rgb(255, 214, 1)",
                          }}
                          onClick={handleclose}
                          className="dropdown-item"
                          to="/ChildMarriage"
                        >
                          ChildMarriage
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          style={{
                            backgroundColor: "rgb(1, 0, 1)",
                            color: "rgb(255, 214, 1)",
                          }}
                          onClick={handleclose}
                          className="dropdown-item"
                          to="/ChildEducation"
                        >
                          ChildEducation
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>
              <NavLink to="#">contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="login-home">
          <ul>
            <li>
              <button className="login-home-button">
                <NavLink
                  style={{ color: "black", textDecoration: "none" }}
                  to="/Login"
                >
                Login Now
                </NavLink>
              </button>
            </li>
          </ul>
        </div>

        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <button
            className="icon-button1"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {showMediaIcons && (
        <div className="slider-menu">
          <div className="slider-part1">
            <img
              className="side-logopic"
              src="https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg"
              alt="location"
            ></img>
            <span className="imcross">
              <button
                className="icon-button2"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                <ImCross />
              </button>
            </span>
          </div>
          <div className="slider-part2">
            <ul>
            <div className="sidebarlines"></div>
              <li>
                <NavLink to="#">Home</NavLink>
              </li>
              <div className="sidebarlines"></div>
              <li>
                <NavLink to="#">About</NavLink>
              </li>
              <div className="sidebarlines"></div>
              <li>
                <div className="dropdown">
                  <NavLink
                    class="btn btn-secondary dropdown-toggle dropdown-link"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    onClick={handleclick}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Planning
                    <KeyboardArrowDownIcon />
                  </NavLink>
                  {planning && (
                    <div className="dropdown-container">
                      <ul
                        className="dropdown-menu"
                        style={{
                        
                          backgroundColor: "rgb(1, 0, 1)",
                          display: "flex",
                          flexDirection: "column",
                          height: "170px",
                          width: "150px",
                          boxShadow: "2px 2px 5px rgb(255, 214, 1)",
                        }}
                        aria-labelledby="dropdownMenuLink"
                      >
                        <p>
                          <NavLink
                            style={{
                              backgroundColor: "rgb(1, 0, 1)",
                              color: "rgb(255, 214, 1)",
                            }}
                            onClick={handleclose}
                            className="dropdown-item"
                            to="/DreamCar"
                          >
                            Dream Car
                          </NavLink>
                        </p>
                        <p>
                          <NavLink
                            style={{
                              backgroundColor: "rgb(1, 0, 1)",
                              color: "rgb(255, 214, 1)",
                            }}
                            onClick={handleclose}
                            className="dropdown-item"
                            to="/DreamHome"
                          >
                            Dream Home
                          </NavLink>
                        </p>
                        <p>
                          <NavLink
                            style={{
                              backgroundColor: "rgb(1, 0, 1)",
                              color: "rgb(255, 214, 1)",
                            }}
                            onClick={handleclose}
                            className="dropdown-item"
                            to="/ChildMarriage"
                          >
                            Child Marriage
                          </NavLink>
                        </p>
                        <p>
                          <NavLink
                            style={{
                              backgroundColor: "rgb(1, 0, 1)",
                              color: "rgb(255, 214, 1)",
                            }}
                            onClick={handleclose}
                            className="dropdown-item"
                            to="/ChildEducation"
                          >
                            Child Education
                          </NavLink>
                        </p>
                    
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <div className="sidebarlines"></div>
              <li>
                <NavLink to="#">Contact</NavLink>
              </li>
              <div className="sidebarlines"></div>
            </ul>
          </div>
          <div className="slider-part3">
            <ul>
              <li>
                <button className="slider-button">
             
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/Login"
                  >
                    Login Now
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
