import { useEffect, useState } from "react";

const useAddProduct = (token) => {
  const [newProduct, setNewProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/categorias");
        if (!response.ok) {
          throw new Error("Error al obtener las categorías");
        }

        const result = await response.json();
        setCategories(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");
        if (!response.ok) {
          throw new Error("No se encontró el usuario");
        }
        const result = await response.json();
        setUsuarios(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUsuarios();
  }, []);

  const addProduct = async (productData) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }
      const result = await response.json();
      setNewProduct(result);
    } catch (error) {
      //console.error("Error al agregar el producto", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { addProduct, newProduct, loading, error, categories, usuarios };
};

export default useAddProduct;
