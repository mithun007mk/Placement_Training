function Navbar() {
  return (
    <nav style={{ backgroundColor: "#222", color: "white", padding: "15px", display: "flex", justifyContent: "space-between" }}>
      <h2 style={{ margin: 0 }}>My React App</h2>
      <div>
        <a href="#home" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Home</a>
        <a href="#about" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>About</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;