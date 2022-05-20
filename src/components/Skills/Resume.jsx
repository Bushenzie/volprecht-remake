import SkillItem from "./SkillItem"
import Heading from "../Heading"
import "./Skills.scss"

const Resume = () => {
  return (
    <div className="resume-content content" id="skills">
      <Heading little="Skills" main="Our skills" />
        <div className="items">
            <SkillItem name="Lorem Ipsum" percent="50" />
            <SkillItem name="Lorem Ipsum" percent="60" />
            <SkillItem name="Lorem Ipsum" percent="20" />
            <SkillItem name="Lorem Ipsum" percent="90" />
            <SkillItem name="Lorem Ipsum" percent="100" />
            <SkillItem name="Lorem Ipsum" percent="100" />
        </div>
        <div className="button-center">
          <button className="btn btn_blank">Download CV</button>
        </div>
    </div>
  )
}

export default Resume