import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const _id = Object.keys(savedCart);
        fetch('https://limitless-waters-39407.herokuapp.com/products/:id', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(_id)
        })
            .then(res => res.json())
            .then(products => {
                if (products.length) {
                    const storedCart = [];
                    for (const _id in savedCart) {
                        const addedProduct = products.find(product => product._id === _id);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedCart[_id];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct);
                        }
                    }
                    setCart(storedCart);
                }
            })


    }, []);

    return [cart, setCart];
}

export default useCart;