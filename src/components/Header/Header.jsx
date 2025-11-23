import { useState, useEffect } from "react";
import Logo from "../../assets/images/AZIRRIGATION Logo.svg?react";
import MenuIcon from "../../assets/images/Menu Icon.svg?react";
import "./style.css";
import Languages from "../Languages/Languages";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${sticky ? "sticky" : ""} ${menuOpen ? "head" : ""}`}
    >
      <a href="#" className="logo">
        <img src={Logo} alt="logo" />
      </a>

      <button className="btn mobile">
        <a href="https://a-pk.vercel.app/">{t("download")}</a>
      </button>

      <i id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={MenuIcon} alt="/" />
      </i>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          {t("services")}
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t("about_us")}
        </a>
        <Languages />
      </nav>

      <button className="btn">
        <a href="https://a-pk.vercel.app/">{t("download")}</a>
      </button>
    </header>
  );
};

export default Header;
