import { useState,useRef,useEffect,useContext } from "react";
import AuthContext from "./AuthContext";
import { silentJSON, processAlert } from "./FetchRoutines";
//import DatePicker from "react-datepicker";
import profile from "./Profile";

//note: i moved the profile stuff to it's own .jsx file. we should possibly(?) remove it from here -evan 

function Activities() {
    //useEffect(() => {getProfile()},[]);
    let titleInput = useRef();
    let interestsInput = useRef();
    let descInput = useRef();

    const jwt = useContext(AuthContext);
    const [events,setEvents] = useState();
    

    function getActivities() {
        const headers = {"Authorization" : "Bearer "+jwt};
        var start ; //valuye of start date in datePicker!
        var end; //value of end date in datePicker!
        fetch(`http://localhost:8085/activity?start=${start}&end=${end}`, {method:"GET",headers:headers}).then(silentJSON)
            .then(response=>{setEvents(response)});
    }

    function postActivities() {
        const headers = {"Authorization" : "Bearer "+jwt,"Content-type" : "application/json; charset=UTF-8"};
        const toPost = {title:titleInput.current.value, description:descInput.current.value, start:"getfrom DatePicker", end:"getFRom DatePicker"};
        fetch("http://localhost:8085/activity", {
            method: "POST",
            body: JSON.stringify(toPost),
            headers: headers
        }).then(response => processAlert(response,"Activity Posted."));
    }

    function userActivities(){
        const headers = {"Authorization" : "Bearer "+jwt};
        fetch(`http://localhost:8085/activity`, {method:"GET",headers:headers}).then(silentJSON)
            .then(response=>{setEvents(response)});
    }

    function deleteActivity(){
        //http://localhost:8085/activity/<id>  <-- idactivity?
        //const id = idOfActivity HOWTO?
        const headers = {"Authorization" : "Bearer "+jwt,"Content-type" : "application/json; charset=UTF-8"};
        fetch(`http://localhost:8085/activity/${id}`, {
            method: "DELETE",
            headers: headers
        }).then(response => processAlert(response,"Activity Deleted."));
    }

    // function updateProfile() {
    //     const headers = {"Authorization" : "Bearer "+jwt,"Content-type" : "application/json; charset=UTF-8"};
    //     const toPost = {fullname:nameInput.current.value,interests:interestsInput.current.value};
    //     fetch("http://localhost:8085/profile/update", {
    //         method: "POST",
    //         body: JSON.stringify(toPost),
    //         headers: headers
    //     }).then(response => processAlert(response,"Profile updated."));
    // }
    // function createProfile() {
    //     const headers = {"Authorization" : "Bearer "+jwt,"Content-type" : "application/json; charset=UTF-8"};
    //     const toPost = {fullname:nameInput.current.value,interests:interestsInput.current.value};
    //     fetch("http://localhost:8085/profile/create", {
    //         method: "POST",
    //         body: JSON.stringify(toPost),
    //         headers: headers
    //     }).then(response => processAlert(response,"Profile created."));
    // }

    if(jwt.length == 0)
        return (
            <p>You are not logged in to your account.</p>
        );
        
    else
        return (
            //once we have datepicker in, need add "select time/date" here
            <>
            <h4>Create your Activity</h4>
            <p>Your name: <input type="text" ref={titleInput} /></p>
            <p>Description: <input type="text" ref={descInput} /></p>
            <p>Choose Date: </p>
            <DateTimePicker
                label="Controlled picker"
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
            <p><button onClick={postActivities}>Create Activity</button></p>
            </>
        );
        
}

export default Activities;