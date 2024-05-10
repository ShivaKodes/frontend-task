import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{job.jobRole}</Typography>
        <Typography variant="subtitle1">{job.companyName}</Typography>
        <Typography variant="body2">{job.location}</Typography>
        <Typography variant="body2">{job.jobDetailsFromCompany}</Typography>
        <Typography variant="body2">
          Experience: {job.minExp} - {job.maxExp} years
        </Typography>
        <Typography variant="body2">
          Salary: {job.minJdSalary ? `$${job.minJdSalary} - ` : ""}$
          {job.maxJdSalary} {job.salaryCurrencyCode}
        </Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
