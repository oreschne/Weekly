 import { useState,useRef,useEffect,useContext } from "react";
 import AuthContext from "./AuthContext";
 import { silentJSON, processAlert } from "./FetchRoutines";
 import { handleLogin, handleNewAccount } from "./Home";
 function Profile() {

//     //im pretty sure we don't need to touch this anymore, BUT we might so keep it in mind.

     useEffect(() => {getProfile()},[]);
     let nameInput = useRef();
     let passInput = useRef();
     let fullName = useRef();

    const jwt = useContext(AuthContext);
    const [profile,setProfile] = useState();

    function userActivities(){
        const headers = {"Authorization" : "Bearer "+jwt};
        fetch(`http://localhost:8085/activity`, {method:"GET",headers:headers}).then(silentJSON)
            .then(response=>{setEvents(response)});
    }
   
    if(jwt.length == 0)
        return (
            <p>You are not logged in to your account.</p>
        );
    else
            return(
                <p>Activities you have posted:</p>
               // userActivities();

            );
}

// export default Profile;
