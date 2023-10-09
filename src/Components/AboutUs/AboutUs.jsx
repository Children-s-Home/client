import Navbar from "../Navbar/Navbar";
import Content from "./Content";
import Contact from "./Contact";
import Footer from "../Footer/Footer"
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Content />
      <Contact />
    </div>
  );
};

export default AboutUs;
