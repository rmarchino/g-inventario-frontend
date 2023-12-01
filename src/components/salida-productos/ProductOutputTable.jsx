import { IoMdAddCircle } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const outputData = [
  {
    id: 1,
    fecha: Date.now(),
    cantidad: 20,
    precioUnitario: 10.99,
    importe: 219,
    producto: "Tela de algodón nacional",
    usuario: "Federico ALvarez",
  },
  {
    id: 2,
    fecha: Date.now() - 3600 * 24,
    cantidad: 50,
    precioUnitario: 8.75,
    importe: 437.5,
    producto: "Tela sintético importado",
    usuario: "Juan Carlos Garcia",
  },
  {
    id: 3,
    fecha: Date.now() - 3600 * 24 * 2,
    cantidad: 10,
    precioUnitario: 12.5,
    importe: 125,
    producto: "Tela de cuero nacional",
    usuario: "Luisa Fernandez",
  },
  {
    id: 4,
    fecha: Date.now() - 3600 * 24 * 3,
    cantidad: 30,
    precioUnitario: 15.5,
    importe: 467.5,
    producto: "Tela de lana natural",
    usuario: "Carlos Martinez",
  },
  {
    id: 5,
    fecha: Date.now() - 3600 * 24 * 4,
    cantidad: 40,
    precioUnitario: 17.5,
    importe: 700,
    producto: "Tela de seda natural",
    usuario: "María Pérez",
  },
  {
    id: 6,
    fecha: Date.now() - 3600 * 24 * 5,
    cantidad: 25,
    precioUnitario: 19.5,
    importe: 487.5,
    producto: "Tela de linolén natural",
    usuario: "Ana Jiménez",
  },
  {
    id: 7,
    fecha: Date.now() - 3600 * 24 * 6,
    cantidad: 15,
    precioUnitario: 21.5,
    importe: 347.5,
    producto: "Tela de algodón natural",
    usuario: "Miguel Rodriguez",
  },
];

const ProductOutputTable = () => {
  return (
    <>
      <h1 className="text-4xl text-gray-500 font-medium ">
        Salida de productos
      </h1>
      <div className="flex flex-row gap-2 cursor-pointer items-center ">
        <RxUpdate className="text-4xl bg-gray-400 hover:bg-gray-500 duration-300 rounded-lg text-white p-2" />
        <IoMdAddCircle className="text-4xl bg-green-400 hover:bg-green-500 duration-300 rounded-lg text-white p-2" />
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
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Cantidad</th>
              <th className="py-2 px-4 border-b">Precio unitario</th>
              <th className="py-2 px-4 border-b">Importe</th>
              <th className="py-2 px-4 border-b">Producto</th>
              <th className="py-2 px-4 border-b">Usuario</th>
              <th className="py-2 px-4 border-b w-[7rem]">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {outputData.map((product) => (
              <tr key={product.id} className="text-gray-500">
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.fecha}</td>
                <td className="py-2 px-4 border-b">{product.cantidad}</td>
                <td className="py-2 px-4 border-b">
                  $ {product.precioUnitario}
                </td>
                <td className="py-2 px-4 border-b">$ {product.importe}</td>
                <td className="py-2 px-4 border-b">{product.producto}</td>
                <td className="py-2 px-4 border-b">{product.usuario}</td>
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

        {/** Pagination */}
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between mt-3">
          <div>
            <p className="text-sm text-gray-500">
              Mostrando registros del 1 al 5 de un total de 7 registros
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-blue-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOutputTable;
