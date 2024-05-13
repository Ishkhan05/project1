import { createSlice } from "@reduxjs/toolkit"
import initialCareState from "../../Constants/care"

const careSlice = createSlice({
  name: "care",
  initialState: initialCareState,
  reducers:"",
  selectors:{
    getAllItems: (state)=>state
  }
})

export default careSlice.reducer
export const { getAllItems } = careSlice.selectors