import React from "react";
//import card
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function InformacionProducto() {
    return (
        <div className='mt-3'>
            <h2 className="text-white">Productos Destacados</h2>
            <p className="text-white">Revisa los productos que tenemos para ti</p>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="assets/images/procesador.jpg" />
                    <Card.Body>
                        <Card.Title>CPU Intel Core i9-7960X 2.8GHz LGA 2066</Card.Title>
                        <Card.Text>
                            El procesador Intel Core i9-7960X de 2.8GHz ofrece soportar memorias DDR4-2666 hasta 128 GB y 
                            tecnología Hyper-Threading. Es ideal para entusiastas y permite un mejor rendimiento en tareas múltiples. 
                            También permite overclocking.
                            </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src="assets/images/ssd.jpg" />
                    <Card.Body>
                        <Card.Title>Discco Solido SSD 250GB M2 Nvm2 Kingston</Card.Title>
                        <Card.Text>
                            Unidad orientada a aumentar la velocidad de su PC/portátil y reducir los tiempos de espera, 
                            otorgándole un rendimiento mucho mejor y mayor vida útil. Pensada para equipos profesionales, 
                            hogar o sistemas con espacio limitado.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );

} export default InformacionProducto;