import React from "react";

const Card = ({item}) => {
  return (
    <div className="card m-3" >
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="creator" ><strong>Created By:</strong><p>&nbsp;&nbsp;{item.createdBy}</p></p>
        <button className="card-btn" >Join this work for <strong>INR {item.price}</strong></button>
      </div>
    </div>
  );
};

export default Card;
