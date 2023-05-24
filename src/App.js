import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Word from "./pages/word";
import Sentence from "./pages/sentence";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word" element={<Word />} />
          <Route path="/sentence" element={<Sentence />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
