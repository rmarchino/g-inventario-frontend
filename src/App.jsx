import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Products from "./components/products/Products";
import Dashboard from "./components/Dashboard";
import Suppliers from "./components/proveedores/Suppliers";
import Customers from "./components/clientes/Customers";
import ProductEntry from "./components/entrada-productos/ProductEntry";
import ProductOutput from "./components/salida-productos/ProductOutput";
import Factura from "./components/factura/Facturas";
import ValidateEmail from "./components/email/ValidateEmail";
import Login from "./components/ui/Login";
import SignUp from "./components/ui/SignUp";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/entrada-products" element={<ProductEntry />} />
          <Route path="/salida-products" element={<ProductOutput />} />
          <Route path="/transactions" element={<Factura />} />
        </Route>
        <Route path="/email-validate" element={<ValidateEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
