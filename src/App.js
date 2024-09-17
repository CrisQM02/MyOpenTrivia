import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppBar from "./views/AppBar";
import Home from "./views/Home";
import Question from "./views/Question";
import Trivia from "./views/Trivia";
import Credits from "./views/Credits";

function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="App">
          <div className="content">
            <AppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="question" element={<Question />} />
              <Route path="trivia" element={<Trivia />} />
              <Route path="credits" element={<Credits />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
