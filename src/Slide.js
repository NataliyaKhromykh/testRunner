import { useState, useEffect } from "react";
import './App.css';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import { NewMenuContainerData } from "./NewMenuContainer-data";



const NewMenuContainer = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = NewMenuContainerData.length;


    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;


    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1);
    };
    function auto() {
        slideInterval = setInterval(nextSlide,intervalTime)
    }

    useEffect(() =>{
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval);
    },[currentSlide])

//   const index = slide.index;
//   index.splice=(0-3)

    return (
        <div className="newMenuContainer">
        <AiOutlineArrowLeft className="menuArrowTwo prev" onClick={prevSlide}/>
            <div>
                <div className="container">
                <h1 className="newMenuContainerText">New this week:</h1>
                </div>
                <div className="ourNewMenuSlider">
                {NewMenuContainerData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? "slidemenu currentmenu" : "slidemenu"} key={index}>
                            {index === currentSlide && (
                                <div className="newMenuBox">
                                    <div className="newMenuMiniBox">
                                    <img src={slide.image}/>
                                    <p className="itemName"> {slide.promoName} </p>
                                    </div>
                                    <div className="newMenuMiniBox">
                                    <img src={slide.image}/>
                                    <p className="itemName"> {slide.promoName} </p>
                                    </div>
                                    <div className="newMenuMiniBox">
                                    <img src={slide.image}/>
                                    <p className="itemName"> {slide.promoName} </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
                </div>
                <div className="container">
                <div className="newMenuContainerText"><h3>Find out <a className="moreLink">more</a></h3></div>
            </div>
            </div>
            <AiOutlineArrowRight className="menuArrowTwo next" onClick={nextSlide}/>
        </div>
    )
}



export default NewMenuContainer;