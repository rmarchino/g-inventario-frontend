import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdInventory } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-gray-700 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-orange-300 text-white text-3xl rounded-full absolute -right-3 top-9 border border-gray-700 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <MdInventory
            className={`bg-orange-300 text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl uppercase duration-300 ${
              !open && "scale-0"
            }`}
          >
            Inventario
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-orange-300 mt-6 ${
            !open ? "px-4" : "px-2.5"
          } py-2`}
        >
          <CiSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
      </div>

      <div className="p-7">
        <h1 className="text-3xl text-gray-600 text-center font-bold">
          Gestión de Inventario Textil
        </h1>
      </div>
    </div>
  );
}

export default App;
