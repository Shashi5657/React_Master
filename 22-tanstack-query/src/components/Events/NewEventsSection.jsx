import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  //anStack Query is an open-source JavaScript library
  //that simplifies data fetching and state management in React applications

  //The query result returned by useQuery contains all of the information about the query
  //such as data, isPEnding, isError & everything
  //but we need to provide the fetching function, it generates all the data automatically
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { max: 3 }],
    queryFn: ({ signal }) => fetchEvents({ signal, max: 3 }),
    staleTime: 5000,
    // gcTime : 1000
  });

  //gctime - garbage collection time, default is 5 mins
  //tanstack query caches the data for easy refetching.
  //it automatically sends the http req , if we r away from the page,
  //unlike the useEffect & natural fetching

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "failed to fetch events"}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
