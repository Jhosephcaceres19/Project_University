import { Universidad } from "./Universidad";
import { useState } from "react";

export const App = () => {
  const [activo, setActivo] = useState<number | null>(null);

  function handleClick(id: number) {
    setActivo(activo === id ? null : id);
  }

  return (
    <div className="grid grid-cols-4 gap-4 place-items-center bg-linear-to-bl from-violet-500 to-fuchsia-500 min-h-screen text-white p-6">
      {Universidad.map((ver) => (
        <div key={ver.id} className="relative">
          {/* Card */}
          <div className="border-black border-2 w-60 bg-violet-950 rounded-2xl overflow-hidden shadow-xl">
            <h1 className="text-center font-semibold p-2">{ver.nombre}</h1>

            <img
              src={ver.imagen}
              alt={ver.nombre}
              className="w-full h-32 object-cover"
            />

            <button
              onClick={() => handleClick(ver.id)}
              className="bg-sky-600 w-full py-2 hover:bg-sky-500 transition"
            >
              {activo === ver.id ? "Ocultar mensaje" : "Ver mensaje"}
            </button>
          </div>

          {/* Description flotante */}
          {activo === ver.id && (
            <p className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-60 bg-violet-700 p-3 rounded-xl text-center shadow-lg z-50">
              {ver.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
