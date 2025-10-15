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
                    <Card.Img variant="top" src="assets/images/ps5.jpg" />
                    <Card.Body>
                        <Card.Title>Play Stations 5</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.
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