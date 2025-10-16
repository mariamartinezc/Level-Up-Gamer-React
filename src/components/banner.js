import React from "react";

//import carrusel
import Carousel from 'react-bootstrap/Carousel';

function BannerPrincipal() {
    return (
        <section className="container my-5">
            <div className="bienvenida card mb-3 shadow-lg">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="card-body p-4 p-md-5">
                            <h2 className="bienvenido-titulo">Bienvenidos a Level-Up Gamer</h2>
                            <p className="card-text" style={{ textAlign: 'justify' }}>
                                Level-Up Gamer es una tienda online dedicada a satisfacer las necesidades de los
                                entusiastas de los
                                videojuegos en Chile. Lanzada hace dos años como respuesta a la creciente demanda
                                durante la
                                pandemia, Level-Up Gamer ofrece una amplia gama de productos para gamers, desde consolas
                                y
                                accesorios hasta computadores y sillas especializadas.
                            </p>
                            <p className="card-text" style={{ textAlign: 'justify' }}>
                                Aunque no cuenta con una
                                ubicación física,
                                realiza despachos a todo el país.
                            </p>
                            <h5 style={{ textAlign: 'justify' }}>Nuestra Misión es:</h5>
                            <p style={{ textAlign: 'justify' }}>
                                Proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo una
                                experiencia de
                                compra única y personalizada, con un enfoque en la satisfacción del cliente y el
                                crecimiento de la
                                comunidad gamer.
                            </p>
                            <h5 style={{ textAlign: 'justify' }}>Nuestra Visión es:</h5>
                            <p style={{ textAlign: 'justify' }}>
                                Ser la tienda online líder en productos para gamers en Chile, reconocida por su
                                innovación, servicio
                                al cliente excepcional, y un programa de fidelización basado en gamificación que
                                recompense a
                                nuestros clientes más fieles.
                            </p>
                            <div className="mt-4">
                                <a href="producto.html" className="btn btn-success btn-primary me-3">Ver Productos</a>
                                <a href="#" className="btn btn-outline-secondary">Ubicacion</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="img-container">
                            <Carousel className="banner-carousel">
                                 <Carousel.Item>
                                    <img
                                        className="d-block  carousel-image"
                                        src="/assets/images/banner2.png"
                                        alt="Productos gaming"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block  carousel-image"
                                        src="/assets/images/bienvenido.jpg"
                                        alt="Level-Up tienda de videojuegos"
                                    />
                                </Carousel.Item>
                               
                                <Carousel.Item>
                                    <img
                                        className="d-block  carousel-image"
                                        src="/assets/images/banner3.png"
                                        alt="Ofertas gamer"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block carousel-image"
                                        src="/assets/images/banner5.jpg"
                                        alt="Novedades Level-Up"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} export default BannerPrincipal;