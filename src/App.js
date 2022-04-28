import "./App.css";
import React, { useState, useEffect } from "react";
import Data from "./data.json";
import JobListings from "./JobListings";
import Header from "./Header";
import Filters from "./Filters";

function App() {
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(Data);

  useEffect(() => {
    setFilteredData(Data);
    let filter = filters.map((searchWord) => {
      return Data.filter(
        (item) =>
          item.languages.includes(searchWord) ||
          item.role.includes(searchWord) ||
          item.level.includes(searchWord)
      );
    });
    filter.map((item) => setFilteredData(item));
  }, [filters]);

  return (
    <div className="App">
      <Header />
      <Filters setFilters={setFilters} filters={filters} />
      <JobListings
        filters={filters}
        setFilters={setFilters}
        jobData={filteredData.length > 0 ? filteredData : Data}
      />
    </div>
  );
}

export default App;
