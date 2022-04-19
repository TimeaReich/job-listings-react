import React from "react";
import Logo from "./images/manage.svg";

const Card = (props) => {
  console.log(props.item.logo);
  return (
    <div className="card-container">
      <div className="logo-div">
        <img alt="logo" src={Logo}></img>
      </div>
      <div className="description-div">
        <div className="description">
          <p className="company-name">{props.item.company}</p>
          {props.item.new ? <p className="new">NEW!</p> : ""}
          {props.item.featured ? <p className="featured">FEATURED</p> : ""}
        </div>
        <p className="position">{props.item.position}</p>
        <div className="job-detail-div">
          <p>{props.item.postedAt}</p>
          <p>{props.item.contract}</p>
          <p>{props.item.location}</p>
        </div>
      </div>
      <div className="button-div"></div>
    </div>
  );
};
export default Card;
