import Header from "./components/Header";
import Cards from "./components/Cards";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
