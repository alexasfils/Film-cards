function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>Copiright ⓒ {year}</p>
      </footer>
    </>
  );
}

export default Footer;
