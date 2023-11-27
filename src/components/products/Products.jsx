import { Link } from "react-router-dom";

const Producto = () => {
  return (
    <div>
      Productos <br />
      <Link to="/" className="underline">
        Ir a dashboard
      </Link>
    </div>
  );
};

export default Producto;
