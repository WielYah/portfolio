import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Portafolio from "./components/Portafolio";
function App() {

  return (
    <div >
      <Routes>
        <Route path="/portafolio" element={ <Portafolio/>} />
      </Routes>
      
    </div>
  )
}

export default App
