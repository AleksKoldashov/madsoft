import { createSlice } from "@reduxjs/toolkit";
const num = localStorage.getItem('count')as string
interface CounterState {
    count: number
  }
const initialState: CounterState={
    count: parseInt(num) | 1
}satisfies CounterState as CounterState



export  const questionSlise=createSlice({
name: 'question',
initialState,
reducers:{
    incriment: (state)=>{
        state.count=state.count <= 9 ? state.count +1 : state.count
    },
    dicriment: (state)=>{
        state.count=state.count > 1 ? state.count -1 : state.count
    },
    count1: (state)=>{
        state.count = 1
    }
}

})

export const{
    incriment,
    dicriment,
    count1
}=questionSlise.actions

export default questionSlise.reducer