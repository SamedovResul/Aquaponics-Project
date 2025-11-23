import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    type: t("surface"),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim()) {
      alert("Email daxil edin");
      return;
    }

    try {
      await axios.post(
        "https://azirrigationserver.azurewebsites.net/contact/email",
        form
      );

      await emailjs.send(
        "service_4hrt4z1",
        "template_7nmtapv",
        form,
        "CneLizhU2cKnljusH"
      );

      setForm({ fullName: "", email: "", message: "", type: "surface" });
      alert("Mesaj göndərildi!");
    } catch (err) {
      console.log(err);
      alert("Xəta baş verdi");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-left">
        <div className="input">
          <div className="input-box">
            <input
              type="text"
              name="fullName"
              className="name"
              placeholder={t("fullName")}
              value={form.fullName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="email"
              placeholder={t("email")}
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="checkbox">
            <div
              className={`radio-item ${
                form.type === t("surface") ? "active" : ""
              } `}
            >
              <input
                type="radio"
                name="type"
                value={t("surface")}
                id="surface"
                checked={form.type === t("surface")}
                onChange={handleChange}
              />
              <label htmlFor="surface">{t("surface_system")}</label>
            </div>

            <div
              className={`radio-item ${
                form.type === t("underground") ? "active" : ""
              } `}
            >
              <input
                type="radio"
                name="type"
                value={t("underground")}
                id="underground"
                checked={form.type === t("underground")}
                onChange={handleChange}
              />
              <label htmlFor="underground">{t("underground_system")}</label>
            </div>
          </div>
        </div>

        <div className="message">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder={t("message")}
            className="text-message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">{t("send")}</button>
        </div>
      </div>
      <div className="form-right">
        <h3>{t("contact_us")}</h3>
        <p>{t("more_information")}</p>
      </div>
    </form>
  );
};

export default ContactForm;
