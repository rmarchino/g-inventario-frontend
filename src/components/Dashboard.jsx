import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>{" "}
      <Link to="/products" className="underline">
        Ir a products
      </Link>
    </div>
  );
};

export default Dashboard;
