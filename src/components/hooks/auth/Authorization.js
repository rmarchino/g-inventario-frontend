import { useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = async (credentials) => {
    try {
      // Hacer la solicitud de inicio de sesión a tu API
      let response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      /*if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }*/

      if (response.ok) {
        const data = await response.json();
        const authToken = data.token;

        // Almacenar el token en el estado
        window.localStorage.setItem("access-token", data.token);
        setToken(authToken);

        //Retornar el token
        return authToken;
      } else {
        throw new Error("Error al realizar el Login");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw error;
    }
  };

  const logout = () => {
    // Limpiar el token al cerrar sesión
    setToken(null);
  };

  return { token, login, logout };
};

export default useAuth;
