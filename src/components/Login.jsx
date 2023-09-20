import { useAuth } from "../utils/userContext"
import { useState } from "react"
const Login=()=>{
   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
   const {handleLogin}=useAuth()
    return(
  <div className="login">
  <span>Login</span>
  <div>
  <label htmlFor="username">Username:  </label>
  <input type="text" id="username" placeholder="Enter username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
 </div>
 <div>
  <label htmlFor="Password">Password:  </label>
   <input type="text" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
   </div>
   <div>
   <button onClick={handleLogin}>login</button>
  </div>
  </div>
    )
}
export default Login