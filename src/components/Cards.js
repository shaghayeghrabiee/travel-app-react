import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
    return (  
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                                src="images/img-9.jpg"
                                text="Explore the hidden heaven"
                                label="Advanture"
                                path="/services"
                        />
                           <CardItem 
                                src="images/img-2.jpg"
                                text="Explore the hidden heaven"
                                label="Luxury"
                                path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                                src="images/img-1.jpg"
                                text="Explore the hidden heaven"
                                label="Advanture"
                                path="/services"
                        />
                           <CardItem 
                                src="images/img-3.jpg"
                                text="Explore the hidden heaven"
                                label="Advanture"
                                path="/services"
                        />
                            <CardItem 
                                src="images/img-4.jpg"
                                text="Explore the hidden heaven"
                                label="Advanture"
                                path="/services"
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Cards;