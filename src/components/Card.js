import React from 'react';

const Card = (props) => {
    return ( 
        <div className='card'>
            <img src={props.img} className="card-img"/>
            <p className='card-status'>{props.status}</p>
            <div className='card-stats'>
                <img src='../img/star.png' className="card-star"/>
                <span>{props.star}</span>
                <span className='gray'>({props.review}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className='card-cap'>{props.cap}</p>
            <p className='card-price'><span className="bold">From ${props.price}</span> / person</p>    
        </div>
    );
}

export default Card;
