import "./App.css";

import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Home from "./pages/Home";
import MoviesDetails from "./pages/MoviesDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MoviesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
