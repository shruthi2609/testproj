import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"
export const fetchUsers=createAsyncThunk("thunk",async ()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res.data)
    return res.data
})
const userSlice=createSlice({
    name:"users",
    initialState:{
        userdata:[],
        loading:false
    },
    reducers:{
        userAdded:(state,action)=>{
            state.userdata.push(action.payload)
        },
        userDeleted:(state,action)=>{
            const {id}=action.payload
            const backup=state.userdata.find((item)=>item.id=id)
            if(backup){
                state.userdata=state.userdata.filter((item)=>item.id!==id)
            }
        }
    },
    extraReducers:{
        [fetchUsers.pending]:(state)=>{
            state.loading=true
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.loading=false
            console.log("payload",action.payload)
            state.userdata=[...state.userdata,...action.payload]
        },
        [fetchUsers.rejected]:(state)=>{
            state.loading=false
        }

    }
})
export const {userAdded,userDeleted} =userSlice.actions
export default userSlice.reducer