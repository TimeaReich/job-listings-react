import React from "react";
import Card from "./Card";

const JobListings = (props) => {
  return props.jobData.map((item) => {
    return (
      <Card
        filters={props.filters}
        setFilters={props.setFilters}
        key={item.id}
        item={item}
      />
    );
  });
};
export default JobListings;
