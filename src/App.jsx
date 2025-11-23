import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import ServiceProblem from "./components/Services/ServiceProblem";
import MobileService from "./components/MobileService/MobileService";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <ServiceProblem />
      <MobileService />
      <About />
      <Contact />
    </>
  );
};

export default App;
