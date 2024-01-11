import data from './data';
import React from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1c2246" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  className="next"/>,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="BigBox">
      <div className='smallBox'>
      <Slider {...settings}>
        {data.map((data) => (
          <div key={data.name} className="card">
            <div className='imgCard'>
            <img src={data.image} width='200px' alt='food'/>
            </div>

            <div>
<p>{data.name}</p>
<button>read more</button>
            </div>
          </div>
        ))}
            </Slider>
      </div>
    </div>

  );
}

export default App;
