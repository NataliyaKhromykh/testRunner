import React, {useState} from 'react';
import { NewMenuContainerData } from './NewMenuContainer-data';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";

const Carousel = () =>{
    const AllCards = NewMenuContainerData;


    const [card, setCard] = useState(AllCards.slice(0,3));

    return (
        <div className="newMenuContainer">
            <AiOutlineArrowLeft className="menuArrowTwo prev"/>
        {card.map((card) => (
           <div className="newMenuBox">
            <div className="newMenuMiniBox" key={card.index}>
                <img src={card.image} alt='photo'/>
                <h2>{card.promoName}</h2>
                </div>
            </div>
        ))}
        <AiOutlineArrowRight className="menuArrowTwo next"/>
        </div>

    
    )
}
export default Carousel;