import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div>
        <h1>Pagina About</h1>
        <p>
          Questa app ti comsete di aggiungere le tue note, film, immagini e
          cetra.
        </p>
      </div>

      <Footer></Footer>
    </>
  );
}
export default About;
