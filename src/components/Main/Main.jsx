import { useTranslation } from "react-i18next";
import Rounded from "../../assets/images/Aşağı sürüşdür.svg?react";
import Hero from "../../assets/images/Hero Image.png";
import "./style.css";
const Main = () => {
  const {t} = useTranslation()
  return (
    <section className="main-page" id="main">
      <div className="main-page-container">
        <div className="main-page-context">
          <p>{t("spend_time")}</p>
          <img src={Hero} alt="/" />
        </div>
        {/* <div className="rounded">
          <img className="circle" src={Rounded} alt="/" />
        </div> */}
      </div>
    </section>
  );
};

export default Main;
