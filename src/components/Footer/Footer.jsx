import "./style.css";
import locationImg from "../../assets/images/LOcation.svg?react";
import callImg from "../../assets/images/Call.svg?react";
import emailImg from "../../assets/images/Email.svg?react";
import logo from "../../assets/images/AZIRRIGATION Logo White.svg?react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const { t } = useTranslation();
  return (
    <footer className="footer-section">
      <div className="last-down">
        <div className="footer-container">
          <div className="footer-up">
            <div className="img">
              <img src={logo} alt="logo" />
            </div>

            <div className="footer-services">
              <div className="contact-icons">
                <div className="contact-icon">
                  <span>
                    <i>
                      <img src={locationImg} alt="location" />
                    </i>
                  </span>
                  <span>
                    A. Mammmadbayova str. 57,
                    <br />
                    {t("address")}
                  </span>
                </div>

                <div className="contact-icon">
                  <span>
                    <i>
                      <img src={callImg} alt="call" />
                    </i>
                  </span>

                  <div className="mobile-numb">
                    <span>+994 55 806 76 69</span>
                    <span>+994 55 808 40 84</span>
                  </div>
                </div>

                <div className="contact-icon">
                  <span>
                    <i>
                      <img src={emailImg} alt="email" />
                    </i>
                  </span>
                  <span>contact@entesk.com</span>
                </div>
              </div>

              <div className="footer-service">
                <h6>{t("services")}</h6>
                <a href="#services">{t("underground_irrigation_systems")}</a>
                <a href="#services">{t("surface_irrigation_systems")}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-down">
          <div className="footer-icons">
            <div className="footer-icon">
              <a
                href="https://www.instagram.com/az_irrigation/?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100091866702856&mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>

              <a
                href="https://www.tiktok.com/@azirrigation?_t=8bZ9DXhAX21&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-tiktok"></i>
              </a>
            </div>

            <div className="footer-text">
              <p>
                {t("copyright")} &copy; {year}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
