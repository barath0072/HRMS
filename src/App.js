import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Container";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
