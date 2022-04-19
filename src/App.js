import "./App.css";
import Data from "./data.json";
import JobListings from "./JobListings";
import headerImg from "./images/bg-header-desktop.svg";

function App() {
  // console.log(jobData);
  return (
    <div className="App">
      <header>
        <div className="header-img-div">
          <img className="header-img" alt="header logo" src={headerImg}></img>
        </div>
      </header>

      <JobListings jobData={Data} />
    </div>
  );
}

export default App;
