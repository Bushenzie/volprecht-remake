import "./AboutUs.scss"
import AboutSection from "./AboutSection";
import Heading from "../Heading"

const AboutUs = () => {

    return (
        <div className="about-us-content content" id="about-us">
            <Heading little="About us" main="Know Us More"/>
            <AboutSection 
                name="Lorem Ipsum" 
                years="12"
                email="name@gmail.com"
                birth="1 January 1989"
                from="Prague, CZ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt ea odio debitis molestias cumque et architecto nemo perspiciatis corporis eum, laudantium eos cupiditate, nihil provident pariatur voluptates quam. Adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt ea odio debitis molestias cumque et architecto nemo perspiciatis corporis eum, laudantium eos cupiditate, nihil provident pariatur voluptates quam. Adipisci.
            </AboutSection>
            <div className="horizontal-line"></div>
            <AboutSection 
                name="Lorem Ipsum" 
                years="23"
                email="name@gmail.com"
                birth="1 January 1989"
                from="Prague, CZ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt ea odio debitis molestias cumque et architecto nemo perspiciatis corporis eum, laudantium eos cupiditate, nihil provident pariatur voluptates quam. Adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt ea odio debitis molestias cumque et architecto nemo perspiciatis corporis eum, laudantium eos cupiditate, nihil provident pariatur voluptates quam. Adipisci.
            </AboutSection>
            
        </div>
    )
}

export default AboutUs