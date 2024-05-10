import React from "react";
import { TextField, MenuItem, Grid } from "@material-ui/core";

const FilterBar = ({ filters, handleChange }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <TextField
          select
          label="Location"
          name="location"
          value={filters.location}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="delhi ncr">Delhi NCR</MenuItem>
          <MenuItem value="mumbai">Mumbai</MenuItem>
          <MenuItem value="chennai">Chennai</MenuItem>
          {/* TODO: Add other locations */}
        </TextField>
      </Grid>
      {/* TODO: Add other filter options */}
    </Grid>
  );
};

export default FilterBar;
