import { Link } from "react-router-dom";

const DUMMMY_EVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events page..</h1>
      <ul>
        {DUMMMY_EVENTS.map(event => <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
        </li>)}
      </ul>
    </>
  );
}
