// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
  const [producStock, setProducStock] = useState(0)

  const aumentoGeneral=(numero)=>{
    setProducStock( producStock+numero)
  }
  return (
    <div className="App">
      <Cabecera cantidad={producStock} />
      <Listado aumentoGeneral={aumentoGeneral}/>
    </div>
  );
}

export default App;
