 import { useState,useRef,useEffect,useContext } from "react";
 import AuthContext from "./AuthContext";
 import { silentJSON, processAlert } from "./FetchRoutines";
 function Profile() {

    const jwt = useContext(AuthContext);

    const [events, setEvents ] = useState([]);


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
                <>
                <p><button onClick={userActivities}>Check Activites</button></p>
                {events.map((activity, index) => (
                    <div key= {index}>
                        <h3>{activity.title}</h3>
                        <p>Description: {activity.description}</p>
                        <p>Start: {activity.start}</p>
                        <p>End: {activity.end} </p>
                    </div>
                ))}
                </>                
            );
}

export default Profile;
