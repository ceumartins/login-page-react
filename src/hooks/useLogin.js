import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState("");

  return [
    { loading, isAuth, error },
    async (email, password) => {
      setError("");
      setIsAuth(false);
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1500));
      setLoading(false);

      if (email === "admin" && password === "pass") {
        setIsAuth(true);
      } else {
        setIsAuth(false);
        setError("As credenciais não correspondem");
      }
    }
  ];
}
