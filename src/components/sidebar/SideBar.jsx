import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SidebarSection, Wrapper, ToggleButton, Overlay, MenuItems } from "./SideBar.styles";
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBars } from "react-icons/fa";

const SideBar = ({ role, showSidebar, setShowSidebar, sidebarWidth, setSidebarWidth }) => {
  const base = role === "direktor" ? "direktor" : "admin";

  const menuItems = [
    { name: "Dashboard", path: `/${base}`, icon: <FaHome /> },
    { name: "Talabalar", path: `/${base}/talabalar`, icon: <FaUserGraduate /> },
    { name: "O'qituvchilar", path: `/${base}/teachers`, icon: <FaChalkboardTeacher /> },
    { name: "Guruhlar", path: `/${base}/guruh`, icon: <FaUsers /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) setShowSidebar(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setShowSidebar]);

  const toggleSidebar = () => {
    if (sidebarWidth === 300) setSidebarWidth(70);
    else setSidebarWidth(300);
  };

  return (
    <>
      <Overlay show={showSidebar && window.innerWidth <= 900} onClick={() => setShowSidebar(false)} />
      <SidebarSection width={sidebarWidth} show={showSidebar}>
        <Wrapper>
          <MenuItems sidebarWidth={sidebarWidth}>
            <h1 style={{
              opacity: sidebarWidth > 70 ? 1 : 0,
              transform: sidebarWidth > 70 ? "translateX(0)" : "translateX(-50px)",
              transition: "0.3s"
            }}>
              IT Center
            </h1>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    end={item.name === "Dashboard"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.innerWidth <= 900 && setShowSidebar(false)}
                  >
                    <span>{item.icon}</span>
                    {sidebarWidth > 70 ? item.name : ""}
                  </NavLink>
                </li>
              ))}
            </ul>
          </MenuItems>

          <ToggleButton onClick={toggleSidebar}>
            <FaBars />
          </ToggleButton>
        </Wrapper>
      </SidebarSection>
    </>
  );
};

export default SideBar;