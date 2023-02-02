import React from "react";

const Card = (props) => {
  let status;

  if (props.openSpots === 0) {
    status = "SOLD OUT";
  } else {
    status = "ONLINE";
  }
  return (
    <div className="card">
      <img src={props.coverImg} className="card-img" />
      {status && <p className="card-status">{status}</p>}
      <div className="card-stats">
        <img src="../img/star.png" className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-cap">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
