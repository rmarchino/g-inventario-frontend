import { IoMdAddCircle } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const proveedorData = [
  {
    id: 1,
    nombre: "Importaciones Coril SAC",
    direccion: "Av. Jose Olaya 530 ",
    telefono: "(+51) 926 895 555",
    ruc: "09234567893",
  },
  {
    id: 2,
    nombre: "Importaciones Casandra SAC",
    direccion: "Av. Primavera 210",
    telefono: "(+51) 956 835 535",
    ruc: "09234567892",
  },
  {
    id: 3,
    nombre: "Importaciones Elisa SAC",
    direccion: "Av. Bolivariano 300",
    telefono: "(+51) 987 654 321",
    ruc: "09234567891",
  },
  {
    id: 4,
    nombre: "Importaciones Maria SAC",
    direccion: "Av. San Martin 500",
    telefono: "(+51) 912 345 678",
    ruc: "09234567890",
  },
  {
    id: 5,
    nombre: "Importaciones Carlos SAC",
    direccion: "Av. Laureles 100",
    telefono: "(+51) 965 478 901",
    ruc: "09234567889",
  },
  {
    id: 6,
    nombre: "Importaciones Ana SAC",
    direccion: "Av. Andres Avelino 200",
    telefono: "(+51) 976 543 210",
    ruc: "09234567888",
  },
  {
    id: 7,
    nombre: "Importaciones Luis SAC",
    direccion: "Av. Los Robles 300",
    telefono: "(+51) 935 246 801",
    ruc: "09234567887",
  },
  {
    id: 8,
    nombre: "Importaciones Margarita SAC",
    direccion: "Av. Cusco 100",
    telefono: "(+51) 956 895 555",
    ruc: "09234567886",
  },
  {
    id: 9,
    nombre: "Importaciones Josefa SAC",
    direccion: "Av. Miraflores 200",
    telefono: "(+51) 987 654 320",
    ruc: "09234567885",
  },
  {
    id: 10,
    nombre: "Importaciones Antonio SAC",
    direccion: "Av. Puno 300",
    telefono: "(+51) 912 345 679",
    ruc: "09234567884",
  },
];

const ProveedorTable = () => {
  return (
    <>
      <h1 className="text-4xl text-gray-500 capitalize font-medium ">
        Proveedores
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
              <th className="py-2 px-4 border-b">Dirección</th>
              <th className="py-2 px-4 border-b">Telefono</th>
              <th className="py-2 px-4 border-b">Ruc</th>
              <th className="py-2 px-4 border-b w-[7rem]">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedorData.map((supplier) => (
              <tr key={supplier.id} className="text-gray-500">
                <td className="py-2 px-4 border-b">{supplier.id}</td>
                <td className="py-2 px-4 border-b">{supplier.nombre}</td>
                <td className="py-2 px-4 border-b">{supplier.direccion}</td>
                <td className="py-2 px-4 border-b">{supplier.telefono}</td>
                <td className="py-2 px-4 border-b">{supplier.ruc}</td>
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

export default ProveedorTable;
