import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSection, Wrapper, Title, Input, Button } from "./login.styles";

const Login = () => {
  const [login, setLogin] = useState("");
  const [parol, setParol] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("isLoggedIn");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (login === "admin" && parol === "123") {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "admin");
      toast.success("Admin sifatida muvaffaqiyatli kirdingiz!");
      navigate("/admin");
    } else if (login === "direktor" && parol === "123") {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "direktor");
      toast.success("Direktor sifatida muvaffaqiyatli kirdingiz!");
      navigate("/direktor");
    } else if (login === "teacher" && parol === "123") {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "teacher");
      toast.success("Teacher sifatida muvaffaqiyatli kirdingiz!");
      navigate("/app"); // teacher uchun guruh/ishhaqi paneli
    } else {
      toast.error("Login yoki parol xato!");
    }
  };

  return (
    <LoginSection>
      <Wrapper>
        <Title>Login</Title>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Input
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            autoComplete="off"
            required
          />
          <Input
            type="password"
            placeholder="Parol"
            value={parol}
            onChange={(e) => setParol(e.target.value)}
            autoComplete="new-password"
            required
          />
          <Button type="submit">Kirish</Button>
        </form>
      </Wrapper>
    </LoginSection>
  );
};

export default Login;