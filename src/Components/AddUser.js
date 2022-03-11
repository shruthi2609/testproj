import { useState } from "react"
import { userAdded } from "../reducers/userSlice"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const AddUser=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const genid=useSelector((state)=>state.users.userdata.length)
    const dispatch=useDispatch()
    const history=useNavigate()
const handleSubmit=()=>{
    dispatch
    (
        userAdded(
            {
                id:genid+1,
                name:name,
                email:email
            }
        )
    )
    history("/")
    
}
    return(
        <div>
           <form>
               Username:
               <input type="text" onChange={(e)=>setName(e.target.value)}></input>
               Email:
               <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
               <button onClick={handleSubmit}>Add</button>
           </form>
               
        </div>
    )
}
export default AddUser