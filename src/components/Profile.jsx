import { useAuth } from "../utils/userContext";
const Profile=()=>{
  const {handleLogout,userObject}=useAuth()
    return(
  <div className="profile">
  <div>username:{userObject.username}</div>
   <div>email:{userObject.email}</div>
   <div>
   <button onClick={handleLogout}>logout</button>
  </div>
  </div>
    )
}
export default Profile;