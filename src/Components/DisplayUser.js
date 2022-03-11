import {useDispatch,useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { userDeleted } from "../reducers/userSlice"
const DisplayUser=()=>{
    const dispatch=useDispatch()
    const {userdata}=useSelector((state)=>state.users)
    const loading=useSelector((state)=>state.loading)
   const handleDelete=(id)=>{
      dispatch(
          userDeleted({id})
      )
   }
    return(
        <div>
            <h1>Redux CRUD operation</h1>
            <Link to="/add-user">
                <button>add user</button>
            </Link>
            {
                loading?(
                    <h1>Loading data ...</h1>
                ):(
                    <table>
                        <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                        </thead>
                        <tbody>
                    {
                        userdata.map((item)=>(
                            <tr>
                              <td>{item.id}</td>
                              <td>{item.name}</td>  
                              <td>{item.email}</td>
                    <button onClick={(e)=>handleDelete(item.id)}>delete</button>
                    <button>edit</button>
                            </tr>
                        ))
                    }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
export default DisplayUser