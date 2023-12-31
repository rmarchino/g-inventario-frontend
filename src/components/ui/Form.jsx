import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/auth/Authorization";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const authToken = await login(credentials);
      // console.log(`Token de autentificación: ${authToken}`);
      localStorage.setItem("access-token", authToken);

      //Redirigir a la página Dashboard despues del inicio de sesión
      navigate("/products");
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
    }
  };

  return (
    <div className="bg-white px-10 py-10 rounded-3xl shadow-xl">
      <form onSubmit={handleLogin}>
        <h1 className="text-3xl font-semibold text-center text-gray-500">
          ¡Bienvenido de nuevo!
        </h1>
        <div className="mt-8">
          <div>
            <label
              className="text-lg font-medium text-gray-500 cursor-pointer"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su username"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-500 cursor-pointer"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su email"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-500 cursor-pointer"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su password"
            />
          </div>
          <div className=" mt-8 flex gap-2 justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 font-medium text-gray-500 text-base cursor-pointer"
                htmlFor="remember"
              >
                Recordar durante 30 días
              </label>
            </div>
            <a className="font-medium text-base cursor-pointer text-indigo-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-indigo-500 text-white text-lg font-bold"
            >
              Iniciar sesion
            </button>
            <button
              type="submit"
              className="flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all cursor-pointer"
            >
              <FcGoogle />
              <p>Iniciar sesion con Google</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
