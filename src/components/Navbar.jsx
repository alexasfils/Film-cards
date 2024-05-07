import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contatti"}>Contatti</Link>
      </li>
      <li>
        <Link to={"/note"}>Note</Link>
      </li>
    </ul>
  );
}

export default Navbar;
