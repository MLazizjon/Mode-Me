import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderSection,
  Wrapper,
  SuggestionList,
  ModalOverlay,
  ModalBox,
  ModalButtons,
} from "./header.styles";

const TeacherHeader = () => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  // 🔥 Outside click to close suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 Teacher uchun pages
  const pages = [
    { name: "Guruh 1", path: "/app/" },
    { name: "Guruh 2", path: "/app/guruh2" },
    { name: "Guruh 3", path: "/app/guruh3" },
    { name: "Ish haqi", path: "/app/ishhaqi" },
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
    sessionStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <HeaderSection>
      <Wrapper>
        {/* 🔍 SEARCH */}
        <div className="left" ref={searchRef}>
          <input
            type="text"
            placeholder="Search pages..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => search && setShowSuggestions(true)}
          />

          {/* 🔥 Suggestions */}
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

        {/* 👤 ROLE + LOGOUT */}
        <div className="right">
          <span className="roleText">Teacher</span>
          <button className="adminBtn" onClick={() => setShowLogoutModal(true)}>
            Chiqish
          </button>
        </div>

        {/* 🔥 Logout modal */}
        {showLogoutModal && (
          <ModalOverlay>
            <ModalBox>
              <p>Siz rostdan chiqmoqchimisiz?</p>
              <ModalButtons>
                <button onClick={handleLogout}>Ha</button>
                <button onClick={() => setShowLogoutModal(false)}>Yo‘q</button>
              </ModalButtons>
            </ModalBox>
          </ModalOverlay>
        )}
      </Wrapper>
    </HeaderSection>
  );
};

export default TeacherHeader;