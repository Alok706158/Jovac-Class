function DarkMode({ dark, setDark }) {
  return (
    <div
      className={dark ? "toggle active" : "toggle"}
      onClick={() => setDark(!dark)}
    >
      <div className="toggle-circle"></div>
    </div>
  );
}

export default DarkMode;
