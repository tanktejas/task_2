import logo from "./logo.svg";
import Navbar from "./Component/Navbar/nav";
import "./App.css";
import Store from "./Component/store/store";
import Card from "./Component/team/team";
import Contact from "./Component/contact/contact";
import Jour from "./Component/journey/jour";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />}></Route>
          <Route path="/team" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/journey" element={<Jour />}></Route>
          <Route path="/store" element={<Store />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
