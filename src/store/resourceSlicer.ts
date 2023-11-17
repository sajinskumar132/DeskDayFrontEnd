import { createSlice } from "@reduxjs/toolkit"
  // Define a type for the slice state
export interface IStore{
    Resources:any
    FilterBackUp:any
    SelectedResources:any
    SearchResource:string
  }
  
  // Define the initial state using that type
  const initialState:IStore = {
    FilterBackUp:[],
    Resources:[],
    SelectedResources:[],
    SearchResource:''
  }
export const ResourseSlice=createSlice({
    name:"Resourse",
    initialState,
    reducers:{
        SetResources:(state,action)=>{
            state.Resources=action.payload
            state.FilterBackUp=action.payload
        },
        UpdateSelectedState:(state,action)=>{
            let resources=state.FilterBackUp
            let ObjIndex=resources.findIndex((obj:any)=>obj.id===action.payload)
            if(resources[ObjIndex].selected){
                resources[ObjIndex].selected=false
            }else{
                resources[ObjIndex].selected=true
            }
            const FilterSelected=resources.filter((item:any)=>item.selected)
            state.SelectedResources=FilterSelected
            if(state.SearchResource.length===0){
                state.Resources=resources
            }else{
                const FilterResult=resources.filter((item:any)=>item.name.includes(state.SearchResource))
                state.Resources=FilterResult
            }
            state.FilterBackUp=resources
        },
        UpdateSearchResource:(state,action)=>{
            state.SearchResource=action.payload
            if(action.payload.length===0){
                state.Resources=state.FilterBackUp
            }else{
                const FilterResult=state.FilterBackUp.filter((item:any)=>item.name.includes(action.payload))
                state.Resources=FilterResult
            }
        }

    }

}) 

export const { SetResources ,UpdateSelectedState,UpdateSearchResource}=ResourseSlice.actions

export default ResourseSlice.reducer
