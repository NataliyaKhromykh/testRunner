import React, {useState, useEffect} from 'react';
import { NewMenuContainerData } from './NewMenuContainer-data';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";

const Carousel = () =>{
    const AllCards = NewMenuContainerData;
    const slideLength = NewMenuContainerData.length;


    const [card, setCard] = useState(AllCards.slice(0,3));

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;


    const nextSlide = () => {
        setCard(card === slideLength -1 ? 0 : card + 1);
    };
    const prevSlide = () => {
        setCard(card === 0 ? slideLength -1 : card - 1);
    };
    function auto() {
        slideInterval = setInterval(nextSlide,intervalTime)
    }

    useEffect(() =>{
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval);
    },[card])

    return (
        <div className="newMenuContainer">
            <AiOutlineArrowLeft className="menuArrowTwo prev"  onClick={prevSlide}/>
        {card.map((card) => (
           <div className="newMenuBox">
            <div className="newMenuMiniBox" key={card.index}>
                <img src={card.image} alt='photo'/>
                <h2>{card.promoName}</h2>
                </div>
            </div>
        ))}
        <AiOutlineArrowRight className="menuArrowTwo next" onClick={nextSlide}/>
        </div>

    
    )
}
export default Carousel;