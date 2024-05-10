import React from "react";
import { Grid } from "@material-ui/core";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  return (
    <Grid container spacing={2}>
      {jobs.map((job) => (
        <Grid item xs={12} key={job.jdUid}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
