import React from 'react';
import Product from './Product'
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      <div className="home_row">
        <Product
          id="123451"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={700}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="123452"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={14000}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="123453"
          title="Rich Dad Poor Dad: Rich Dad's Guide to Financial Freedom"
          price={400}
          rating={5}
          image="https://m.media-amazon.com/images/I/91GO13K08eL._AC_UY218_.jpg"
        />
        <Product
          id="123454"
          title="Echo (3rd Gen) bundle with Echo Flex - Charcoal"
          price={10000}
          rating={3}
          image="https://m.media-amazon.com/images/I/719V9EKNDvL._AC_UY218_.jpg"
        />
        <Product
          id="123455"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={1700}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="123456"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={28000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  )
}

export default Home
