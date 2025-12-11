import { Universidad } from "./Universidad";
import { useState } from "react";

export const App = () => {
  const [activo, setActivo] = useState<number | null>(null);

  function handleClick(id: number) {
    // si está abierto → ciérralo; si no, ábrelo
    setActivo(activo === id ? null : id);
  }

  return (
    <div>
      {Universidad.map((ver) => (
        <div key={ver.id}>
          <h1>{ver.nombre}</h1>

          <button onClick={() => handleClick(ver.id)}>
            {activo === ver.id ? "Ocultar mensaje" : "Ver mensaje"}
          </button>

          {activo === ver.id && <p>{ver.description}</p>}
        </div>
      ))}
    </div>
  );
};
