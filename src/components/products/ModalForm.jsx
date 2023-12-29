import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import useAddProduct from "../hooks/useAddProduct";
import useAuth from "../hooks/auth/Authorization";

const ModalForm = () => {
  const { token } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const [productData, setProductData] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: 0,
    stock: 0,
    firstname: "",
  });

  const { addProduct, newProduct, loading, error, categories, usuarios } =
    useAddProduct(token);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(productData);
  };

  const getErrorMessages = (fieldName) => {
    if (!error) {
      return null;
    }

    const fieldErrors = error
      .split(",")
      .filter((msg) => msg.includes(fieldName));

    return fieldErrors.map((msg) => (
      <span key={msg} className="block">
        {msg}
      </span>
    ));
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <IoMdAddCircle className="text-4xl bg-green-400 hover:bg-green-500 duration-300 rounded-lg text-white p-2" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center gap-5 overflow-auto max-h-[600px] scrollbar-thin">
            <h2 className="text-2xl text-gray-900 font-medium">
              Agregar producto
            </h2>
            <form onSubmit={handleSubmit}>
              <div className=" grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="Ingrese nombre del producto"
                      className="w-full text-sm p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 duration-500"
                      value={productData.nombre}
                      onChange={handleInputChange}
                    />
                    {error && (
                      <p className="text-white text-sm p-1 bg-red-500 mt-3 rounded-lg">
                        {getErrorMessages("nombre")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="categoria"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Categoría
                  </label>
                  <div className="mt-2">
                    <select
                      name="categoria"
                      id="categoria"
                      className="w-full text-sm p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 duration-500"
                      value={productData.categoria}
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccione una categoría</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.nombre || category.nombre}
                        </option>
                      ))}
                    </select>
                    {error && (
                      <p className="text-white text-sm p-1 bg-red-500 mt-3 rounded-lg">
                        {getErrorMessages("categoria")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="descripcion"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Descripción
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="descripcion"
                      id="descripcion"
                      placeholder="Ingrese descripción del producto"
                      className="w-full text-sm p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 duration-500"
                      value={productData.descripcion}
                      onChange={handleInputChange}
                    />
                    {error && (
                      <p className="text-white text-sm p-1 bg-red-500 mt-3 rounded-lg">
                        {getErrorMessages("descripcion")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2 ">
                  <label
                    htmlFor="precio"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Precio
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="precio"
                      id="precio"
                      placeholder="Ingrese precio del producto"
                      className="w-full text-sm p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 duration-500"
                      value={productData.precio}
                      onChange={handleInputChange}
                    />
                    {error && (
                      <p className="text-white text-sm p-1 bg-red-500 mt-3 rounded-lg">
                        {getErrorMessages("precio")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2 ">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Stock
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="stock"
                      id="stock"
                      placeholder="Ingrese stock del producto"
                      className="w-full text-sm p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 duration-500"
                      value={productData.stock}
                      onChange={handleInputChange}
                    />
                    {error && (
                      <p className="text-white text-sm p-1 bg-red-500 mt-3 rounded-lg">
                        {getErrorMessages("stock")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Usuario
                  </label>
                  <div className="mt-2">
                    <select
                      name="firstname"
                      id="firstname"
                      className="w-full text-sm p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 duration-500"
                      value={productData.firstname}
                      onChange={handleInputChange}
                    >
                      <option>Seleccione un usuario</option>
                      {usuarios.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.firstname || user.firstname}
                        </option>
                      ))}
                    </select>
                    {error && (
                      <p className="text-white text-sm p-1 bg-red-500 mt-3 rounded-lg">
                        {getErrorMessages("firstname")}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 "></div>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-green-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Agregar
                </button>
                <button
                  type="button"
                  className="rounded-md bg-red-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
            {loading && <p>Agregando producto...</p>}
            {newProduct && <p>Producto agregado: {newProduct.nombre}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
