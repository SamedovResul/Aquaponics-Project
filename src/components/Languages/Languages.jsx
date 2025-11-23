import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

function Languages() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown">
      <button className="lang-select" onClick={() => setOpen(!open)}>
        🌐 {selected ? selected : "Select"}
      </button>

      {open && (
        <div className="lang-menu">
          <div
            className="lang-item"
            onClick={() => {
              changeLang("en");
              setSelected("English");
            }}
          >
            🇬🇧 English
          </div>
          <div
            className="lang-item"
            onClick={() => {
              changeLang("az");
              setSelected("Azərbaycan");
            }}
          >
            🇦🇿 Azərbaycan
          </div>
        </div>
      )}
    </div>
  );
}

export default Languages;
