import "./style.css";
import img from "../../assets/images/landşaft.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about-page" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2>{t("about_us")}</h2>
        </div>

        <div className="about-content-container">
          <div className="about-img">
            <img src={img} alt="" />
          </div>
          <div className="about-content">
            <p>
            {t("about_azirrigation")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
