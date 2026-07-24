import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar dark={dark} setDark={setDark} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;