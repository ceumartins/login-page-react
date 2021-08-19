import { useState } from "react";
import { useLogin } from "./hooks/useLogin";
import "./styles.css";

export default function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [{ loading, isAuth, error }, handleLogin] = useLogin();

  const hSubmit = () => {
    handleLogin(login, password);
  };

  return (
    <div className="wrapper fadeInDown">
      <p>{loading && "Carregando.."}</p>
      <p>{error && error}</p>
      <p>{isAuth && "Login confirmado"}</p>

      <div id="formContent">
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="fadeIn third button"
          type="submit"
          value="Log In"
          onClick={hSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
