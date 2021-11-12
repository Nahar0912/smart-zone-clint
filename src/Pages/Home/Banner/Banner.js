import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 h-300"
                src="https://www.globalbrandsmagazine.com/wp-content/uploads/2020/08/Top-10-Mobile-Brands-in-World-1-1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-300"
                src="https://www.cnet.com/a/img/PZ5c56UYHe9PV4yE6RVxcqNUFpk=/1200x630/2021/04/29/4450cdac-ddda-443a-a22f-18f37e81114f/samsung-galaxy-note-s20-ultra-iphone-12-pro-max-product-promo-hoyle-2021.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-300"
                src="https://media.wired.com/photos/6000ef46c724a79925642473/master/pass/Gear-Samsung-Galaxy-S21-colorways-SOURCE-Samsung.jpg.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};


export default Banner;