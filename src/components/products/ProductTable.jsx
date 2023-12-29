import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import ModalForm from "./ModalForm";

const ProductTable = () => {
  const productsApiUrl = "http://localhost:8000/productos";
  const categoriesApiUrl = "http://localhost:8000/categorias";
  const usersApiUrl = "http://localhost:8000/users";

  const {
    data: productos,
    loading: productsLoading,
    error: productsError,
  } = useFetchData(productsApiUrl);

  const {
    data: categorias,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchData(categoriesApiUrl);

  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetchData(usersApiUrl);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    if (productsLoading || categoriesLoading || usersLoading) {
      return;
    }
    if (productsError || categoriesError || usersError) {
      console.log("Error al cargar los productos");
    }
  }, [
    productos,
    categorias,
    users,
    productsLoading,
    categoriesLoading,
    productsError,
    categoriesError,
    usersLoading,
    usersError,
  ]);

  if (productsLoading || categoriesLoading || usersLoading) {
    return <p>Cargando...</p>;
  }

  if (productsError || categoriesError || usersError) {
    return <p>Error al cargar los productos</p>;
  }

  // Obtener el nombre de la categoría de cada producto
  const getCategoryName = (categoria) => {
    const category = categorias.find((c) => c.id === categoria);
    return category && category.nombre ? category.nombre : "No hay categoría";
  };

  // Obtener el nombre del usuario de cada producto
  const getUserName = (usuario) => {
    const user = users.find((u) => u.id === usuario);
    return user && user.firstname ? user.firstname : "No hay usuario";
  };

  return (
    <>
      <h1 className="text-4xl text-gray-500 capitalize font-medium ">
        Productos
      </h1>
      <div className="cursor-pointer">
        <ModalForm />
      </div>
      <div className="flex justify-between mt-3">
        <div className=" flex flex-row gap-2 text-gray-500 text-lg">
          <strong className="font-normal">Mostrar</strong>
          <select
            name="tabla1"
            className="text-sm w-[7rem] focus:outline-none active:outline-none rounded-lg border border-gray-300"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <strong className="font-normal">registros</strong>
        </div>
        <div className=" flex flex-row gap-2 items-center text-gray-500 text-lg">
          <strong className="font-normal">Buscar:</strong>
          <input
            className="text-sm focus:outline-none active:outline-none h-10 w-[15rem] border border-gray-300 text-gray-500 rounded-lg pl-2 px-2"
            type="search"
          />
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-auto mb-3">
        <table className="min-w-full bg-white rounded-sm">
          <thead>
            <tr className="bg-blue-500 text-white text-lg">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Descripción</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Categoría</th>
              <th className="py-2 px-4 border-b">Usuario</th>
              <th className="py-2 px-4 border-b w-[7rem]">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((product) => (
              <tr key={product.id} className="text-gray-500">
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.nombre}</td>
                <td className="py-2 px-4 border-b">{product.descripcion}</td>
                <td className="py-2 px-4 border-b">{product.precio}</td>
                <td className="py-2 px-4 border-b">{product.stock}</td>
                <td className="py-2 px-4 border-b">
                  {getCategoryName(product.categoria)}
                </td>
                <td className="py-2 px-4 border-b">
                  {getUserName(product.usuario)}
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white py-1 px-2 rounded">
                    <MdEdit />
                  </button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded ml-2">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
