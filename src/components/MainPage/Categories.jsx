import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/fruits.png",
      cateName: "grocery",
    },
    {
      cateImg: "./images/category/beverages.png",
      cateName: "gourmet foods",
    },
    // {
    //   cateImg: "./images/category/vegetables.png",
    //   cateName: "Vegetables",
    // },
    // {
    //   cateImg: "./images/category/meat.png",
    //   cateName: "Meat",
    // },
    // {
    //   cateImg: "./images/category/dairy.png",
    //   cateName: "Dairy",
    // },
    // {
    //   cateImg: "./images/category/bakery.png",
    //   cateName: "Bakery",
    // },
    // {
    //   cateImg: "./images/category/seafood.png",
    //   cateName: "Seafood",
    // },
    // {
    //   cateImg: "./images/category/beverages.png",
    //   cateName: "Beverages",
    // },
    // {
    //   cateImg: "./images/category/snacks.png",
    //   cateName: "Snacks",
    // },
    // {
    //   cateImg: "./images/category/spices.png",
    //   cateName: "Spices & Seasonings",
    // },
  ];

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
