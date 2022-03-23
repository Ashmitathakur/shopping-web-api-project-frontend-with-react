import React from "react";
// import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import sliderone from "../image/sliderone.png"
import slidertwo from "../image/slidertwo.png"

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={sliderone}
          alt='First slide'
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={slidertwo}
          alt='Second slide'
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Be Smart BUY smart</h3>
          <p>Premiium Contents</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
