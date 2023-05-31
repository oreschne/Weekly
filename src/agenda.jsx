import { useEffect, useState } from 'react'
import { silentJSON } from "./FetchRoutines"
import DateTimePicker from 'react-datetimepicker';
function Agenda(){
//create a table and for loop through the datatabse to create a new line for each value in datbase and display events throughout the week!
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchAgenda();
    }, []);

    function fetchAgenda(){
        fetch("http://localhost:8085/activity")
        .then(silentJSON)
        .then(response => setEvents(response));nq
    }

    return (
        <div>
            <h4>All Posted Activities</h4>
            {events.map(activity =>(
                <div key={activity.id}>
                    <h5>{activity.title}</h5>
                    <p>Description: {activity.description}</p>
                    <p>Start: {activity.start}</p>
                    <p>End: {activity.end}</p>
                 </div>   
            ))}
        </div>
    );


}
export default Agenda;