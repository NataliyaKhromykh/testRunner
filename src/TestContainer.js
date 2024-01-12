import React, {useState} from 'react';
import { NewMenuContainerData } from './NewMenuContainer-data';

const Carousel = () =>{
    const AllCards = NewMenuContainerData;

    const [card, setCard] = useState(AllCards.slice(0,3));

    return (
        <div>
        {card.map((card) => (
           <div className="newMenuBox">
            <div className="newMenuMiniBox" key={card.index}>
                <img src={card.image} alt='photo'/>
                <h2>{card.promoName}</h2>
                </div>
            </div>
        ))}
        </div>
    )
}
export default Carousel;