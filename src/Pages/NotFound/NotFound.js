import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '65%' }} src={"https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg"} alt="" />
            <br />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;