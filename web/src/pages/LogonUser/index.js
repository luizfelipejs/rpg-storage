import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../services/auth";
import Api from "../../services/api";

import Input from "../../components/input";
import "./styles.css";

function LogonUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await Api.post("/login", {
        email,
        password,
      });

      login(response.data.message.token);
      history.push("/");
      alert("Vc ja esta logado");
    } catch (error) {
      alert("verifique o seu email ou senha podem estar incorretos");
      console.log(error);
    }
  };

  return (
    <div className="logonUser-page">
      <form className="logonUser-form" onSubmit={handleLogin}>
        <h1>RPG STORAGE</h1>
        <p>Faça seu login</p>

        <Input
          name="email"
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          name="password"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="logon" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LogonUser;
