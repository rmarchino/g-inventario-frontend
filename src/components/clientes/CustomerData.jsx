import { IoMdAddCircle } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const customerData = [
  {
    id: 1,
    nombre: "John Doe",
    dni: "72589636",
    direccion: "Calle falsa 123",
    telefono: "(+51)-923456796",
    email: "john@gmail.com",
  },
  {
    id: 2,
    nombre: "Jane Smith",
    dni: "76589436",
    direccion: "Calle Tarapcá 520",
    telefono: "(+51)-987654321",
    email: "janesmith@hotmail.com",
  },
  {
    id: 3,
    nombre: "Ana Garcia",
    dni: "75896326",
    direccion: "Av. de la independencia 450",
    telefono: "(+51)-954321678",
    email: "anagarciamail@yahoo.com",
  },
  {
    id: 4,
    nombre: "Luis Perez",
    dni: "72589636",
    direccion: "Calle Falsa 123",
    telefono: "(+51)-923456796",
    email: "luisperez@gmail.com",
  },
  {
    id: 5,
    nombre: "Sara Rodriguez",
    dni: "76589436",
    direccion: "Calle Tarapcá 520",
    telefono: "(+51)-987654321",
    email: "sararodriguez@hotmail.com",
  },
  {
    id: 6,
    nombre: "Carlos Martinez",
    dni: "75896326",
    direccion: "Av. de la independencia 450",
    telefono: "(+51)-954321678",
    email: "carlossmartinez@yahoo.com",
  },
  {
    id: 7,
    nombre: "Maria Diaz",
    dni: "72589636",
    direccion: "Calle Falsa 123",
    telefono: "(+51)-923456796",
    email: "maria@gmail.com",
  },
];

const CustomerData = () => {
  return (
    <>
      <h1 className="text-4xl text-gray-500 capitalize font-medium ">
        Clientes
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
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">DNI</th>
              <th className="py-2 px-4 border-b">Dirección</th>
              <th className="py-2 px-4 border-b">Telefono</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b w-[7rem]">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer) => (
              <tr key={customer.id} className="text-gray-500">
                <td className="py-2 px-4 border-b">{customer.id}</td>
                <td className="py-2 px-4 border-b">{customer.nombre}</td>
                <td className="py-2 px-4 border-b">{customer.dni}</td>
                <td className="py-2 px-4 border-b">{customer.direccion}</td>
                <td className="py-2 px-4 border-b">{customer.telefono}</td>
                <td className="py-2 px-4 border-b">{customer.email}</td>
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

export default CustomerData;
