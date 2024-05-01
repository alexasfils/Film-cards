import TheatersIcon from "@mui/icons-material/Theaters";

import Time from "./Time";

function Header() {
  const custodeAppName = "Custode";
  return (
    <header>
      <h1 className="header-title">
        <TheatersIcon /> {custodeAppName}
      </h1>
      <Time />
    </header>
  );
}
export default Header;
