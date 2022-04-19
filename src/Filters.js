import React from "react";

const Filters = (props) => {
  const onClickHandler = () => {
    props.setFilters([]);
  };

  return props.filters.length > 0 ? (
    <div className="filters-div">
      <div>
        {props.filters.map((item) => {
          return <button className="languages-button">{item}</button>;
        })}
      </div>
      <div>
        <button onClick={onClickHandler} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Filters;
