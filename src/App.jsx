import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Products from "./components/products/Products";
import Dashboard from "./components/Dashboard";
import Suppliers from "./components/proveedores/Suppliers";
import Customers from "./components/clientes/Customers";
import ProductEntry from "./components/entrada-productos/ProductEntry";
import ProductOutput from "./components/salida-productos/ProductOutput";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/entrada-products" element={<ProductEntry />} />
          <Route path="/salida-products" element={<ProductOutput />} />
        </Route>
        <Route path="login" element={<div>Este es la página login</div>} />
      </Routes>
    </Router>
  );
}
