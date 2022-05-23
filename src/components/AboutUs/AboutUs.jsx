import "./AboutUs.scss";
import AboutSection from "./AboutSection";
import Heading from "../Heading"

const AboutUs = () => {

    return (
        <div className="about-us-content content" id="about-us">
            <Heading little="About us" main="Know Us More"/>
            <AboutSection 
                name="Lukáš Volprecht" 
                years="10"
                email="lukas@volprecht.cz"
                birth="21 May 1989"
                from="Teplice, CZ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat perferendis natus quam labore inventore nisi? Quo amet magni necessitatibus eaque adipisci recusandae at ex, optio debitis illo ipsa asperiores enim? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut enim voluptatibus laboriosam sed aliquam magnam quas numquam? Quam et quo optio velit ipsum quas eveniet, minus, aliquid sapiente consectetur nisi.
            </AboutSection>
            <div className="horizontal-line"></div>
            <AboutSection 
                name="Jiří Volprecht" 
                years="10"
                email="jiri@volprecht.cz"
                birth="7 June 1991"
                from="Prague, CZ">
                    Senior fullstack developer with more than 5 years of professional experience.
                    I have been working mostly in Python, but have also used other languages such as 
                    TypeScript, Angular or Node.js. 
                    Customer-oriented and structured method of working, focused on quality
                    and maintainability. Highly motivated to work in a team, both comfortable
                    in big companies as in small teams.
            </AboutSection>
        </div>
    )
}

export default AboutUs