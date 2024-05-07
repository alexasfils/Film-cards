import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";

import "./index.css";
import Utenti from "./Forms/Utenti";

function App() {
  const [turnOn, setTurnOn] = useState(false);

  function handleClick() {
    setTurnOn(true);
  }

  return (
    <div className="div-principale">
      <Header />
      <button onClick={handleClick}>Registrati</button>
      <Navbar />
      <Utenti />
      <Footer />
    </div>
  );
}

export default App;
