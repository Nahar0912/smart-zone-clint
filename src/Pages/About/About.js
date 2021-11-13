import React from 'react';

const About = () => {
    return (
        <div className='conatiner'>
            <div className='d-flex row align-items-center'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <img src={'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'} alt="" width='680px' height='500px'/>
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                    <h1>Know About Us</h1>
                    <br />
                    <p>SmartZone.com aims to be the most useful and trusted mobile phone info site of Bangladesh. We are serving an online database of carefully selected fine quality latest mobile phones, their prices, full specifications, reviews etc. for the benefit of the consumers. Phones in our site can be found by different useful categories such as brands, price range etc. We are not a seller and we do not sell any products via SmartZone</p>
                    <br />
                    <h4>Our email: smartzone@gmail.com</h4>
                </div>
            </div>
        </div>
    );
};

export default About;