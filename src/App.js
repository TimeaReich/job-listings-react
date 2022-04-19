import "./App.css";
import React, { useState, useEffect } from "react";
import Data from "./data.json";
import JobListings from "./JobListings";
import Header from "./Header";
import Filters from "./Filters";

function App() {
  const [filters, setFilters] = useState([]);

  return (
    <div className="App">
      <Header />
      <Filters setFilters={setFilters} filters={filters} />
      <JobListings filters={filters} setFilters={setFilters} jobData={Data} />
    </div>
  );
}

export default App;
