import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="logo-div">
          <img alt="logo" src={props.item.logo}></img>
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
            <span className="dot"></span>
            <p>{props.item.contract}</p>
            <span className="dot"></span>
            <p>{props.item.location}</p>
          </div>
        </div>
      </div>

      <div className="button-div">
        <button
          onClick={() => {
            props.setFilters(props.filters.concat(props.item.role));
          }}
          className="languages-button"
        >
          {props.item.role}
        </button>
        <button
          onClick={() => {
            props.setFilters(props.filters.concat(props.item.level));
          }}
          className="languages-button"
        >
          {props.item.level}
        </button>
        {props.item.languages.map((item) => {
          return (
            <button
              key={item}
              onClick={() => {
                props.setFilters(props.filters.concat(item));
              }}
              className="languages-button"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
