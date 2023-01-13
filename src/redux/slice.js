import { createSlice } from "@reduxjs/toolkit";
import initialState from "../redux/state";

export const slice = createSlice({
  name: "slice",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state = { ...state, user: action.payload };
      return state;
    },
    setCarTypeDetails: (state, action) => {
      state = { ...state, carTypeDetails: action.payload };
      return state;
    },
    setFacilityDetails: (state, action) => {
      state = { ...state, facilityDetails: action.payload };
      return state;
    },
    setSubscriptionPlanDetails: (state, action) => {
      state = { ...state, subscriptionPlanDetails: action.payload };
      return state;
    },
    setRefetchCarTypeDetails: (state, action) => {
      state = { ...state, RefetchCarTypeDetails: action.payload };
      return state;
    },
    setRefetchFacilityDetails: (state, action) => {
      state = { ...state, RefetchFacilityDetails: action.payload };
      return state;
    },
    setRefetchSubscriptionPlanDetails: (state, action) => {
      state = { ...state, RefetchSubscriptionPlanDetails: action.payload };
      return state;
    },
  },
});

// this is for dispatch
export const {
  setUser,
  setCarTypeDetails,
  setFacilityDetails,
  setSubscriptionPlanDetails,
  setRefetchCarTypeDetails,
  setRefetchFacilityDetails,
  setRefetchSubscriptionPlanDetails,
} = slice.actions;

// this is for configureStore
export default slice.reducer;
