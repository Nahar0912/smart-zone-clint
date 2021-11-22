import React from 'react';

const ReviewItem = (props) => {
    const { key, name, price } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;