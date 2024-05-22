import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./JobDummyData";

function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar jobs={jobData} setFilteredJobs={setFilteredJobs} />
        {filteredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
        <p>Created by Hari Narayan</p>
      </div>
    </>
  );
}

export default App;
