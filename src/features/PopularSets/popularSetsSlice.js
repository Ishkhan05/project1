import { createSlice } from "@reduxjs/toolkit";
import popularSets from "../../Constants/popularSets";

const popularSetsSlice = createSlice({
  name: "popularSets",
  initialState: popularSets,
  reducers:"",
  selectors:{
    getAllItems: (state)=>state
  }
})

export default popularSetsSlice.reducer
export const {getAllItems} = popularSetsSlice.selectors