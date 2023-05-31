// import { useState,useRef,useEffect,useContext } from "react";
// import AuthContext from "./AuthContext";
// import { silentJSON, processAlert } from "./FetchRoutines";
// //import { handleLogin, handleNewAccount } from "./Home";
// function Profile() {

//     //im pretty sure we don't need to touch this anymore, BUT we might so keep it in mind.

//     useEffect(() => {getProfile()},[]);
//     let nameInput = useRef();
//     let passInput = useRef();
//     let fullName = useRef();

//     const jwt = useContext(AuthContext);
//     const [profile,setProfile] = useState();
    

//     function getProfile() {
//         const headers = {"Authorization" : "Bearer "+jwt};
//         fetch("http://localhost:8085/user", {method:"GET",headers:headers}).then(silentJSON)
//             .then(response=>{setProfile(response)});
//     }
//     function updateProfile() {
//         const headers = {"Authorization" : "Bearer "+jwt,"Content-type" : "application/json; charset=UTF-8"};
//         const toPost = {login:nameInput.current.value,password:passInput.current.value,fullName:fullName.current.input};
//         fetch("http://localhost:8085/user/update", {
//             method: "POST",
//             body: JSON.stringify(toPost),
//             headers: headers
//         }).then(response => processAlert(response,"Profile updated."));
//     }

//     function userActivities(){
//         const headers = {"Authorization" : "Bearer "+jwt};
//         fetch(`http://localhost:8085/activity`, {method:"GET",headers:headers}).then(silentJSON)
//             .then(response=>{setEvents(response)});
//     }
    
//     // function createProfile() {
//     //     const headers = {"Authorization" : "Bearer "+jwt,"Content-type" : "application/json; charset=UTF-8"};
//     //     const toPost = {login:nameInput.current.value,password:passInput.current.value,fullName:fullName.current.input};
//     //     fetch("http://localhost:8085/user/create", {
//     //         method: "POST",
//     //         body: JSON.stringify(toPost),
//     //         headers: headers
//     //     }).then(response => processAlert(response,"Profile created."));
//     // }

//     if(jwt.length == 0)
//         return (
//             <p>You are not logged in to your account.</p>
//         );
//     else if(profile)
//         return (
//             <>
//             <h4>Check your Activites: </h4>
//             <p>Your name: <input type="text" ref={nameInput} defaultValue={user.name} /></p>
//             <p>Your Password: <input type="text" ref={passInput} defaultValue={user.password} /></p>
//             <p><button onClick={userActivities}>Check Activites</button></p>
//             </>
//         );
//     // else
//     //     return (
//     //         <>
//     //         <h4>Create your profile</h4>
//     //         <p>Your name: <input type="text" ref={nameInput} /></p>
//     //         <p>Your Password: <input type="text" ref={passInput} /></p>
//     //         <p><button onClick={createProfile}>Create Profile</button></p>
//     //         </>
//     //     );
// }

// export default Profile;
