import {useState} from "react";
import Heading from "../Heading";
import CarouselItem from "./CarouselItem";
import Image from "../../images/person.jpg";
import "./Carousel.scss";

const Carousel = () => {

    const [current,setCurrent] = useState(0);

    return (
        <div className="carousel-content content" id="client-speak">
            <Heading little="Client Speak" main="What Our Client Say"/>
            {current === 0 && <CarouselItem image={Image} name="John Doe 1" position="Businessman" quote="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ullam corrupti numquam excepturi in accusamus similique velit. Nihil reiciendis, magni, quod pariatur at recusandae laborum, beatae quia quas numquam modi!"/> }
            {current === 1 && <CarouselItem image={Image} name="John Doe 2" position="Businessman" quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate minus natus pariatur. Rerum quaerat impedit libero, unde ex enim saepe animi maxime placeat iure ipsa, soluta eaque consectetur at!"/> }
            {current === 2 && <CarouselItem image={Image} name="John Doe 3" position="Businessman" quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eaque repudiandae, amet dolore laboriosam pariatur debitis expedita quas, alias temporibus deleniti reiciendis consectetur labore aspernatur fuga, cum neque vel hic!"/> }
            {current === 3 && <CarouselItem image={Image} name="John Doe 4" position="Businessman" quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolor, qui expedita atque beatae eaque perferendis! Maiores cumque veniam nemo quas quia unde qui eaque, quos magnam provident rem natus?"/> }
            
            <ul className="bar">
                <li onClick={()=>setCurrent(0)} className={current === 0 && "active"}></li>
                <li onClick={()=>setCurrent(1)} className={current === 1 && "active"}></li>
                <li onClick={()=>setCurrent(2)} className={current === 2 && "active"}></li>
                <li onClick={()=>setCurrent(3)} className={current === 3 && "active"}></li>
            </ul>
        </div>
    )
}

export default Carousel