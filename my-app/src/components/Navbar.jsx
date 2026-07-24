import DarkMode from "./DarkMode";

function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <h2 className="logo">ReactSite</h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <DarkMode dark={dark} setDark={setDark} />
    </nav>
  );
}

export default Navbar;