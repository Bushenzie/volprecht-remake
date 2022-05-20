import {FaAngleUp,FaAngleDown} from "react-icons/fa";
import {useState} from "react";

const FAQItem = ({question,answer}) => {

    const [active ,setActive] = useState(false);

    return (
        <div className="Item">
            <div className="question" onClick={()=> setActive(prev=> !prev)} >
                {active ?
                <FaAngleUp className={active && "active"}/> : 
                <FaAngleDown className={active && "active"}/>}
                <h3 className={active && "active"}>{question}</h3>
            </div>
            {active && <p>{answer}</p>}
        </div>
    )
}

export default FAQItem