import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./Components/Popularanime/Popular";
import Anime from "./Components/Popularanime/Anime/Anime";

function App() {

  return (

    <div className="app">
      <h3>Anime Website</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/anime/:id" element={<Anime/>  } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
