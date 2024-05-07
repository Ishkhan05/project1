import { createSlice } from "@reduxjs/toolkit"
import initialChooseState from "../../Constants/choose"

const chooseSlice = createSlice({
  name: "choose",
  initialState: initialChooseState,
  reducers:"",
  selectors:{
    getAllItems: (state)=>state
  }
})

export default chooseSlice.reducer
export const { getAllItems } = chooseSlice.selectors