import { createSlice } from "@reduxjs/toolkit";
import { sampleJobData } from "../data";

const initialState = {
  jobListings: sampleJobData,
};

const jobListingsSlice = createSlice({
  name: "jobListings",
  initialState,
  reducers: {},
});

export const selectJobListings = (state) => state.jobListings;

export default jobListingsSlice.reducer;
