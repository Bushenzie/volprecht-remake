import {useState} from "react"

const PortfolioItem = ({image,url,text,subtext,children:icon}) => {

    const [hovered, setHovered] = useState(false);

    return (
            <a href={url} className="Item"    
                onMouseEnter={()=> setHovered(true)} 
                onMouseLeave={()=> setHovered(false)}>

                <img src={image} alt="" className="image"/>
                {hovered && <div className="text">
                    {icon}
                    <h4>{text}</h4>
                    <h5>{subtext}</h5>
                </div>}
            </a>
    )
}

export default PortfolioItem