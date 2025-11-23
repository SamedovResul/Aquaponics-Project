import "./style.css";
import img1 from "../../assets/images/IMG_3626.png";
import img2 from "../../assets/images/IMG_3647.png";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const servicesData = [
    {
      id: 1,
      title: t("surface_irrigation_title"),
      desc: t("surface_irrigation_desc"),
      img: img1,
    },
    {
      id: 2,
      title: t("underground_irrigation_title"),
      desc: t("underground_irrigation_desc"),
      img: img2,
    },
  ];
  return (
    <section className="services-page" id="services">
      <div className="services-container">
        <div className="service-header">
          <h2>{t("services")}</h2>
        </div>
        <div className="service-cards">
          {servicesData?.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-img">
                <img src={service.img} alt="" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
