import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className="box d_flex top" key={index}>
              {/* <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
              </div> */}
              <div className="right">
                <img src={value.cover} alt={value.title} style={{width:"100%"}} />
                <button className="btn-primary " style={{ margin:"10px"}}>Visit Collections</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
