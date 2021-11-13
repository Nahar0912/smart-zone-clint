import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { _id, name, description, price, img } = props.product;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 c-cart my-3">
            <Card>
                <Card.Body>
                    <div className="text-center">
                        <img src={img} alt="" width='80%' height='200px'/>
                    </div>
                    <Card.Title className="text-center"><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                    <div>
                        <h3>Price: {price} $</h3>
                    </div>
                    <Link  to={`/review/${_id}`}>
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn btn-secondary">Buy Now</button>
                    </Link>
                </Card.Body>             
            </Card>
        </div>
    );
};

export default Product;