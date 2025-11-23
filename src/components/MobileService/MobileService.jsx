import "./style.css";
import img from "../../assets/images/iPhone 12 Pro.png";
import videoFile from "../../assets/images/Video.mov";
import { useTranslation } from "react-i18next";
const MobileService = () => {
  const {t} = useTranslation();
  return (
    <section className="mobile-service">
      <div className="mobile-service-container">
        <div className="mobile-service-content">
          <div className="mobile-content">
            <h3>{t("monitor_manage_title")}</h3>
            <p>
             {t("monitor_manage_desc")}
            </p>
          </div>
          <div className="mobile-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="mobile-service-video-content">
          <video controls muted autoPlay>
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default MobileService;
