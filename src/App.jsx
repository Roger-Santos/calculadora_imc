import { useState } from "react";

import Topo from "./components/Header"
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"



function App() {
  const [imc, setIMC] = useState(Number);
  const [estilo, setEstilo] = useState();

  return (
    <>
      <Topo />
      <Formulario parentCallback={setIMC} estiloAtualizado={estilo}/>      
      <Resultado imcCalculado={imc} parentCallbackEstilo={setEstilo}/>
    </>
  )
}

export default App;
