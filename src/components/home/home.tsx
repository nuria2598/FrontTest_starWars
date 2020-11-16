import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const HomePage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/57e6d7444950ae14f6da8c7dda353678153adbe65659744b_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/57e6d7444950ae14f6da8c7dda353678153adbe65659744b_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/57e6d7444950ae14f6da8c7dda353678153adbe65659744b_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    //"https://pixabay.com/get/57e6d7444950ae14f6da8c7dda353678153adbe65659744b_1280.jpg"
  )
}

export default HomePage
