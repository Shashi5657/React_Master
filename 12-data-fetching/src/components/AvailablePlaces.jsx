import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  //using this state to handle loading states
  const [isFetching, setIsFetching] = useState(true);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  //this state is used to handle error
  const [error, setError] = useState();

  //we r fetching the data from the backend using inbuilt 'fetch' function
  //this fetch funtion returns a promise that is the response
  //then we r ser\tting that fetched respdata to the available places
  //here this is an infinite loop, because we r using state update funtion ,
  //so on every render,it fetches again and it updates again
  //so to stop this we use useEffect here

  // useEffect(()=> {
  //    fetch('http://localhost:3000/places').then((response)=> {
  //   return response.json()
  // }).then((resData)=> {
  //   setAvailablePlaces(resData.places)
  // })
  // }, [])

  // to use the async await we r modifying the above code

  //to use async await we need to have a function , but we cannot call directly async to here
  //like useEffect(async()=> {}) -- this is wrong
  //so we created a function fetchPlaces with aysnc  in which we gonna fetch the data

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      //when handling errors , we need to use try catch block to efficiently handle errors
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "could not fetch places" });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An Error Occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      //this  is dynamically rendering using the state, if its true then the loadin text shows
      isLoading={isFetching}
      //this is the text that shows while the page is loading, here we r sending it through props
      loadingText="fetching Places Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
