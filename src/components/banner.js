import React from "react";

//import carrusel
import Carousel from 'react-bootstrap/Carousel';

function BannerPrincipal() {
    return (
        <div className='mt-3'>
         <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/images/banner2.png"
                    alt="First slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Bienvenidos a Level-UP Gamer</h3>
                    <p>En esta tienda virtual encontrarás los mejores Productos gaming.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/images/banner3.png"
                    alt="Second slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Ofertas gammer</h3>
                    <p>Novedades y Descuento.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/images/banner4.jpg"
                    alt="Third slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
} export default BannerPrincipal;