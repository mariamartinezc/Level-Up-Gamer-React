import React from "react";
//import card
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function DestacadosProducto() {
    return (
         <div className='mt-3'>
            <h2 className="titulo-destacado">Productos Destacados</h2>
            <p className="titulo-destacado">---Todos nuestros productos son 100% Originales.---</p>
            
            <CardGroup className="mb-4">
                <Card className="destacado-card">
                    <Card.Img 
                        variant="top" 
                        src="assets/images/catan.jpg" 
                        className="card-img-top"
                    />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title text-white">CATAN</Card.Title>
                        <Card.Text className="card-text">
                            Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.
                        </Card.Text>
                        <h4 className="texto-precio">$29.990 CLP</h4>
                    </Card.Body>
                </Card>

                <Card className="destacado-card">
                    <Card.Img 
                        variant="top" 
                        src="assets/images/ps5.jpg" 
                        className="card-img-top"
                    />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title text-white">PlayStation 5</Card.Title>
                        <Card.Text className="card-text">
                            La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.
                        </Card.Text>
                        <h4 className="texto-precio">$549.990 CLP</h4>
                    </Card.Body>
                </Card>

                <Card className="destacado-card">
                    <Card.Img 
                        variant="top" 
                        src="assets/images/poleraLEVEL-UP.png" 
                        className="card-img-top"
                    />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title text-white">Polera Level-UP</Card.Title>
                        <Card.Text className="card-text">
                            Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.
                        </Card.Text>
                        <h4 className="texto-precio">$14.990 CLP</h4>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup>
                <Card className="destacado-card">
                    <Card.Img 
                        variant="top" 
                        src="assets/images/Mousepad.jpg" 
                        className="card-img-top"
                    />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title text-white">Mousepad Razer Goliathus Extended Chroma</Card.Title>
                        <Card.Text className="card-text">
                            Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.
                        </Card.Text>
                        <h4 className="texto-precio">$29.990 CLP</h4>
                    </Card.Body>
                </Card>

                <Card className="destacado-card">
                    <Card.Img 
                        variant="top" 
                        src="assets/images/Silla Gamer Secretlab Titan.jpg" 
                        className="card-img-top"
                    />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title text-white">Silla Gamer Secretlab Titan</Card.Title>
                        <Card.Text className="card-text">
                            Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.
                        </Card.Text>
                        <h4 className="texto-precio">$349.990 CLP</h4>
                    </Card.Body>
                </Card>

                <Card className="destacado-card">
                    <Card.Img 
                        variant="top" 
                        src="assets/images/pc-asus.png" 
                        className="card-img-top"
                    />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title text-white">PC Gamer ASUS ROG Strix</Card.Title>
                        <Card.Text className="card-text">
                            Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.
                        </Card.Text>
                        <h4 className="texto-precio">$1.299.990 CLP</h4>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );

} export default DestacadosProducto;