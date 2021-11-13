import React from 'react';

const ReviewItem = (props) => {
    const { _id, name, price } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <button onClick={() => handleRemove(_id)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;