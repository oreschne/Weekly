import { useEffect, useState } from 'react'
import { silentJSON } from "./FetchRoutines"

function Agenda(){
//create a table and for loop through the datatabse to create a new line for each value in datbase and display events throughout the week!
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchAgenda();
    }, []);

    function fetchAgenda(){
        fetch("http://localhost:8085/activity")
        .then(silentJSON)
        .then(response => setEvents(response))
        .catch(error => {
            console.error('Error Fetching Agenda', error);
        });
    }

    return (
        <div>
          <h4>All Posted Activities</h4>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              {events.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.title}</td>
                  <td>{activity.description}</td>
                  <td>{activity.start}</td>
                  <td>{activity.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );


}
export default Agenda;