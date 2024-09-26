import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/fruits.png",
      cateName: "Fruits",
    },
    {
      cateImg: "./images/category/vegetables.png",
      cateName: "Vegetables",
    },
    {
      cateImg: "./images/category/meat.png",
      cateName: "Meat",
    },
    {
      cateImg: "./images/category/dairy.png",
      cateName: "Dairy",
    },
    {
      cateImg: "./images/category/bakery.png",
      cateName: "Bakery",
    },
    {
      cateImg: "./images/category/seafood.png",
      cateName: "Seafood",
    },
    {
      cateImg: "./images/category/beverages.png",
      cateName: "Beverages",
    },
    {
      cateImg: "./images/category/snacks.png",
      cateName: "Snacks",
    },
    {
      cateImg: "./images/category/spices.png",
      cateName: "Spices & Seasonings",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' style={{height:'30px'}} />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
