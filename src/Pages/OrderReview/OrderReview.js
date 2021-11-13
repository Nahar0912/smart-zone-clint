import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useParams } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const { productId } = useParams();

    const handleRemove = _id => {
        const newCart = cart.filter(product => product._id !== _id);
        setCart(newCart);
        removeFromDb(_id);
    }

    return (
        <div className="shop-container">
            <h2>You Successfully Purchased the item: {productId}</h2>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;