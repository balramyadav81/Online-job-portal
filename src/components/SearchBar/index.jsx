import React, { useState } from "react";

function Searchbar(props) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    console.log("Search Criteria:", jobCriteria);
    const filteredJobs = props.jobs.filter((job) => {
      const titleMatch =
        !jobCriteria.title ||
        job.title.toLowerCase().includes(jobCriteria.title.toLowerCase());
      const locationMatch =
        !jobCriteria.location ||
        job.location.toLowerCase().includes(jobCriteria.location.toLowerCase());
      const experienceMatch =
        !jobCriteria.experience ||
        job.experience
          .toLowerCase()
          .includes(jobCriteria.experience.toLowerCase());
      const typeMatch =
        !jobCriteria.type ||
        job.type.toLowerCase().includes(jobCriteria.type.toLowerCase());
      console.log("Job:", job.title, job.location, job.experience, job.type);
      console.log(
        "Matches:",
        titleMatch,
        locationMatch,
        experienceMatch,
        typeMatch
      );
      return titleMatch && locationMatch && experienceMatch && typeMatch;
    });
    console.log("Filtered Jobs:", filteredJobs);
    props.setFilteredJobs(filteredJobs);
  };

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <select
        onChange={handleChange}
        name="title"
        value={jobCriteria.title}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select
        onChange={handleChange}
        name="type"
        value={jobCriteria.type}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        name="experience"
        value={jobCriteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button
        onClick={handleSearch}
        className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md"
        id="my-class"
      >
        Search
      </button>
    </div>
  );
}

export default Searchbar;
