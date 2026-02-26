import styled from "styled-components";

export const SidebarSection = styled.section`
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  position: fixed;
  left: 0;
  top: 0;
  /* z-index: 100; */
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
  font-family: "Inter", sans-serif;
  height: 100%;

  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 6px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    font-size: 14px;
    font-weight: 500;
    color: #6b7280;
    text-decoration: none;
    border-radius: 8px;
    position: relative;
    transition: 0.2s ease;
  }

  a:hover {
    background: #f3f4f6;
    color: #1E90FF;
  }

  a.active {
    background: #eef4ff;
    color: #1E90FF;
  }

  a.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 4px;
    background: #1E90FF;
    border-radius: 4px;
  }

  .logout {
    padding: 12px 14px;
    font-size: 14px;
    color: #6b7280;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
  }

  .logout:hover {
    background: #fee2e2;
    color: #b91c1c;
  }
`;