import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index} style={{overflow:"hidden"}}>
                <div className='img' style={{height:"150px", overflow:"hidden"}}>
                  <img src={value.cover} alt='' width='100%' height={150} />
                </div>
                <h4>{value.name}</h4>
                <span>$ {value.price}.00</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
