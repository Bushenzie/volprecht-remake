import {FaQuestion} from "react-icons/fa"
import "./FAQ.scss";
import Heading from "../Heading"
import FAQItem from "./FAQItem";


const FAQ = () => {
  return (
    <div className="faq-content content" id="faq">
        <div className="left">
            <Heading little="FAQ" main="Have any questions?"/>
            <div className="items">
                <FAQItem question="Lorem ipsum dolor sit amet?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas dolorem, earum corrupti magnam ea modi cupiditate quia a, explicabo voluptatibus quae nesciunt itaque non magni? Pariatur earum tempore perspiciatis. "/>
                <div className="horizontal-line"></div>
                <FAQItem question="Lorem ipsum dolor sit amet?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas dolorem, earum corrupti magnam ea modi cupiditate quia a, explicabo voluptatibus quae nesciunt itaque non magni? Pariatur earum tempore perspiciatis. "/>
                <div className="horizontal-line"></div>
                <FAQItem question="Lorem ipsum dolor sit amet?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas dolorem, earum corrupti magnam ea modi cupiditate quia a, explicabo voluptatibus quae nesciunt itaque non magni? Pariatur earum tempore perspiciatis. "/>
                <div className="horizontal-line"></div>
                <FAQItem question="Lorem ipsum dolor sit amet?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas dolorem, earum corrupti magnam ea modi cupiditate quia a, explicabo voluptatibus quae nesciunt itaque non magni? Pariatur earum tempore perspiciatis. "/>
            </div>
        </div>
        <div className="right">
            <FaQuestion />
        </div>
    </div>
  )
}

export default FAQ