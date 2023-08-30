import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [incrementar, setIncrementar] = useState(0);

  const clicOpcionIncrementar = () => {
    setIncrementar(incrementar + 1);
    
  };

  const clicOptionReducir = () => {
    setIncrementar(incrementar - 1);
    
  };

  const clickOptionReiniciar =()=>{
    setIncrementar(0)
  }

  return (
    <div className="App">
      <div className="subApp">
        <div>
        <Contador textoCont={incrementar} />
        </div>
        <Boton
          texto="INCREMENTAR"
          btnEstado="true"
          clickOpcion={clicOpcionIncrementar}
        />
        <Boton
          texto="REDUCIR"
          btnEstado="false"
          clickOpcion={clicOptionReducir}
        />
          <Boton
          texto='REINICIAR'
          btnEstado='reiniciar'
          clickOpcion={clickOptionReiniciar}/>
      </div>
    </div>
  );
}

export default App;
