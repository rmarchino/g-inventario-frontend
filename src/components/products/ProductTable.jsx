import { IoMdAddCircle } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const productData = [
  {
    id: 1,
    nombre: "Tela sintético inportada",
    descripcion: "Excelente calidad 100% original",
    precio: 29.99,
    stock: 50,
    categoria: "Sintético",
  },
  {
    id: 2,
    nombre: "Tela algodón nacional",
    descripcion: "Muy buena calidad 100% original",
    precio: 34.99,
    stock: 60,
    categoria: "Algodon",
  },
  {
    id: 3,
    nombre: "Tela de cuero nacional",
    descripcion: "Buena calidad 100% original",
    precio: 49.99,
    stock: 70,
    categoria: "Cuero",
  },
  {
    id: 4,
    nombre: "Tela de lana natural",
    descripcion: "Muy buena calidad 100% original",
    precio: 59.99,
    stock: 80,
    categoria: "Lana",
  },
  {
    id: 5,
    nombre: "Tela de seda natural",
    descripcion: "Excelente calidad 100% original",
    precio: 79.99,
    stock: 90,
    categoria: "Seda",
  },
  {
    id: 6,
    nombre: "Tela de lineno natural",
    descripcion: "Muy buena calidad 100% original",
    precio: 99.99,
    stock: 100,
    categoria: "Lineno",
  },
  {
    id: 7,
    nombre: "Tela de cáñamo natural",
    descripcion: "Buena calidad 100% original",
    precio: 149.99,
    stock: 110,
    categoria: "Cáñamo",
  },
  {
    id: 8,
    nombre: "Tela de algodón extranjera",
    descripcion: "Muy buena calidad 100% original",
    precio: 29.99,
    stock: 120,
    categoria: "Algodon",
  },
  {
    id: 9,
    nombre: "Tela de cotton extranjera",
    descripcion: "Excelente calidad 100% original",
    precio: 39.99,
    stock: 130,
    categoria: "Cotton",
  },
  {
    id: 10,
    nombre: "Tela de silk extranjero",
    descripcion: "Muy buena calidad 100% original",
    precio: 49.99,
    stock: 140,
    categoria: "Silk",
  },
];

const ProductTable = () => {
  return (
    <>
      <h1 className="text-4xl text-gray-500 capitalize font-medium ">
        Productos
      </h1>
      <div className="flex flex-row gap-2 cursor-pointer items-center ">
        <RxUpdate className="text-5xl bg-gray-400 hover:bg-gray-500 duration-300 rounded-lg text-white p-2" />
        <IoMdAddCircle className="text-5xl bg-green-400 hover:bg-green-500 duration-300 rounded-lg text-white p-2" />
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
              <th className="py-2 px-4 border-b w-[7rem]">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.id} className="text-gray-500">
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.nombre}</td>
                <td className="py-2 px-4 border-b">{product.descripcion}</td>
                <td className="py-2 px-4 border-b">{product.precio}</td>
                <td className="py-2 px-4 border-b">{product.stock}</td>
                <td className="py-2 px-4 border-b">{product.categoria}</td>
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
