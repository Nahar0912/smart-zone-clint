import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useCart from '../../../hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart(products);

    useEffect(() => {
        fetch('https://limitless-waters-39407.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product._id);
    }

    return (
        <div id="products">
            <h2 className="text-primary mt-5">Our Products</h2>
            <Container>
                <div className="row">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Products;