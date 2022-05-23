import "./style/main.scss";
import Nav from "./components/Menu/Nav";
import Welcome from "./components/Welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUs";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Resume from "./components/Skills/Resume"
import Portfolio from "./components/Portfolio/Portfolio";
import CTO from "./components/CTO/CTO";
/* 
import FAQ from "./components/FAQ/FAQ";
import Carousel from "./components/ClientSpeak/Carousel"; 
*/
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <> 
      <Nav />
      <Welcome />
      <AboutUs />
      <WhatWeDo />
      <Resume />
      <Portfolio />
      <CTO />
      {/* <FAQ /> */}
      {/* <Carousel /> */}
      <ContactUs />
      <Footer />
    </>
  )
}

export default App;
