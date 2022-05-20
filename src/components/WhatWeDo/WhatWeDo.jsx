import Item from './WWDItem';
import Heading from '../Heading';
import { FaPalette } from "react-icons/fa"
import "./WhatWeDo.scss";

const WhatWeDo = () => {
    return (
        <div className='what-we-do-content content' id="what-we-do">
            <Heading little="What We Do?" main="How we can help with your next next project"/>
            <div className="items">

                <Item 
                    name="Lorem Ipsum" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda praesentium ab cumque optio voluptatem dignissimos nemo incidunt quo soluta nihil">
                    <FaPalette />    
                </Item> 
                <Item 
                    name="Lorem Ipsum" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda praesentium ab cumque optio voluptatem dignissimos nemo incidunt quo soluta nihil">
                    <FaPalette />    
                </Item> 
                <Item 
                    name="Lorem Ipsum" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda praesentium ab cumque optio voluptatem dignissimos nemo incidunt quo soluta nihil">
                    <FaPalette />    
                </Item> 
                <Item 
                    name="Lorem Ipsum" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda praesentium ab cumque optio voluptatem dignissimos nemo incidunt quo soluta nihil">
                    <FaPalette />    
                </Item> 
                <Item 
                    name="Lorem Ipsum" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda praesentium ab cumque optio voluptatem dignissimos nemo incidunt quo soluta nihil">
                    <FaPalette />    
                </Item> 
                <Item 
                    name="Lorem Ipsum" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda praesentium ab cumque optio voluptatem dignissimos nemo incidunt quo soluta nihil">
                    <FaPalette />    
                </Item> 
            </div>
        </div>
    )
}

export default WhatWeDo