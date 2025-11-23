import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import "./style.css";
const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <ContactForm />
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
