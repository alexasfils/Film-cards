import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";

import "./index.css";
import Utenti from "./Forms/Utenti";

function App() {
  return (
    <div className="div-principale">
      <Header />
      <Notes />
      <Utenti />
      <Footer />
    </div>
  );
}

export default App;
