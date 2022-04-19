import React from "react";
import Card from "./Card";

const JobListings = (props) => {
  console.log(props.jobData);
  return props.jobData.map((item) => {
    return <Card item={item} />;
  });
};
export default JobListings;
