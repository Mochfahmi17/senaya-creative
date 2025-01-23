import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about" Component={AboutPage}></Route>
        <Route path="/portfolio" Component={PortfolioPage}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
