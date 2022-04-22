import React from "react";

const Filters = (props) => {
  const onClickClear = () => {
    props.setFilters([]);
  };
  const onClickDelete = () => {};

  return props.filters.length > 0 ? (
    <div className="filters-div">
      <div className="filter-box">
        {props.filters.map((item) => {
          return (
            <div className="filters-container">
              <p className="filters-p">{item}</p>
              <button onClick={onClickDelete} className="filters-button">
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className="clear-button-container">
        <button onClick={onClickClear} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Filters;
