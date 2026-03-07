import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderSection,
  Wrapper,
  SuggestionList,
  ModalOverlay,
  ModalBox,
  ModalButtons,
} from "./Header.styles";

const AdminHeader = ({ showSidebar, setShowSidebar, sidebarWidth }) => {

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const role = localStorage.getItem("role") || sessionStorage.getItem("role");

  const roleText =
    role === "admin" ? "Admin" :
    role === "direktor" ? "Direktor" :
    "Teacher";

  const pages = [
    { name: "Dashboard", path: `/${role}` },
    { name: "Talabalar", path: `/${role}/talabalar` },
    { name: "O‘qituvchilar", path: `/${role}/teachers` },
    { name: "Guruhlar", path: `/${role}/guruh` },
    { name: "Davomat", path: `/${role}/davomat` },
  ];

  const filtered = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (path) => {
    navigate(path);
    setSearch("");
    setShowSuggestions(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    sessionStorage.removeItem("role");
    navigate("/");
  };

  return (
    <HeaderSection showSidebar={showSidebar} sidebarWidth={sidebarWidth}>

      <Wrapper>

        <div className="left" ref={searchRef}>

          <input
            type="text"
            placeholder="Search pages..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
          />

          {search && showSuggestions && (
            <SuggestionList>

              {filtered.map((item, index) => (
                <li key={index} onMouseDown={() => handleSelect(item.path)}>
                  {item.name}
                </li>
              ))}

            </SuggestionList>
          )}

        </div>

        <div className="right">

          <span className="roleText">{roleText}</span>

          <button
            className="adminBtn"
            onClick={() => setShowLogoutModal(true)}
          >
            Chiqish
          </button>

          <button
            className="hamburger"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            ☰
          </button>

        </div>

      </Wrapper>

      {showLogoutModal && (
        <ModalOverlay>

          <ModalBox>

            <h3>Chiqishni tasdiqlaysizmi?</h3>

            <ModalButtons>
              <button onClick={handleLogout}>Ha</button>
              <button onClick={() => setShowLogoutModal(false)}>Bekor</button>
            </ModalButtons>

          </ModalBox>

        </ModalOverlay>
      )}

    </HeaderSection>
  );
};

export default AdminHeader;