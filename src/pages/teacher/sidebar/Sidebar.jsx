import { NavLink } from "react-router-dom";
import { SidebarSection, Wrapper } from "./sidebar.styles";

const TeacherSidebar = () => {
  const pages = [
    { name: "Guruh 1", path: "/app/" },
    { name: "Guruh 2", path: "/app/guruh2" },
    { name: "Guruh 3", path: "/app/guruh3" },
    { name: "Ish haqi", path: "/app/ishhaqi" },
  ];

  return (
    <SidebarSection>
      <Wrapper>
        <h1>IT Center</h1>
        <ul>
          {pages.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                end={item.path === "/app/"} // Guruh1 uchun end
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Wrapper>
    </SidebarSection>
  );
};

export default TeacherSidebar;