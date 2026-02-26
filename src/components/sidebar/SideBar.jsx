import React from "react";
import { NavLink, useLocation,  } from "react-router-dom";
import { SidebarSection, Wrapper } from "./SideBar.styles";

const SideBar = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  // hozirgi base path (admin yoki direktor)
  const base = location.pathname.split("/")[1];

  const menuItems = [
    { name: "Dashboard", path: `/${base}` },
    { name: "Talabalar", path: `/${base}/talabalar` },
    { name: "O'qituvchilar", path: `/${base}/teachers` },
    { name: "Guruhlar", path: `/${base}/guruh` },
  ];

  // const logout = () => {
  //   localStorage.removeItem("role"); // agar loginda role saqlansa
  //   navigate("/");
  // };

  return (
    <SidebarSection>
      <Wrapper>
        <div>
          <h1>IT Center</h1>

          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  end={item.name === "Dashboard"} // Dashboard faqat exact match
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </SidebarSection>
  );
};

export default SideBar;