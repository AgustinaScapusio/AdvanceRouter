import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function EventsPage() {
const data= useLoaderData();
if(data.isError){
  return <p>{data.message}</p>
}
const events=data.events;

 
  return (
    <>
     <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
        // return {isError: true, message: "Failed to fetch events."}
    //  throw new Response(JSON.stringify({isError: true, message: "Failed to fetch events."}), {status:500});
  return json({isError: true, message: "Failed to fetch events."}, {status:500});
  } else {
        return response;
  }
 }