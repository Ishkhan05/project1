import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct:(state,action)=>{
      if(state.length>0){
        state.forEach(elem=>{
          if(elem.id === action.payload.id){
            elem.count++
            return state
          }else{
            console.log(2223)
            return [...state, action.payload]

          }
        })
      }else{
        return[...state, action.payload]
      }
      
    },
    handleRemoveAll:(state,action)=>{
      return []
    },
    addCount:(state,action)=>{
      (state[action.payload-1].count)++;
    },
    minusCount:(state,action)=>{
      if((state[action.payload-1].count)>1){
        (state[action.payload-1].count)--
      }
    },
    handleRemoveItem:(state,action)=>{
      return state.filter(elem=>elem.id!==action.payload)
    }
  },
  selectors: {
    getProduct: (state)=>state
  }
})

export default productsSlice.reducer
export const {getProduct} = productsSlice.selectors
export const {addProduct,handleRemoveAll,addCount,minusCount,handleRemoveItem} = productsSlice.actions