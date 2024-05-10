import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, CircularProgress } from "@material-ui/core";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";
import { selectJobListings } from "./store/features/jobSlice";
import { sampleJobData } from "./store/data";

const App = () => {
  const jobListings = useSelector(selectJobListings);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Simulating API call for fetching more job listings
  const fetchMoreJobListings = () => {
    setLoading(true);
    setTimeout(() => {
      // Assuming we fetch 5 more job listings on each scroll
      const newJobs = sampleJobData.slice(page * 5, (page + 1) * 5);
      setFilteredJobs((prevJobs) => [...prevJobs, ...newJobs]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000); // Simulating network delay
  };

  useEffect(() => {
    setFilteredJobs(sampleJobData.slice(0, 5));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchMoreJobListings();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event) => {
    // Handle filter changes here
    console.log(event.target.name, event.target.value);
  };

  return (
    <div>
      <FilterBar filters={{}} handleChange={handleChange} />
      <Grid container spacing={2}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} key={job.jdUid}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      {loading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default App;
