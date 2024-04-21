// we r creating this custom http hook, because in both the components meals & checkout
//we r requesting i.e., fetching, so to simplify we creating custom hook
//they(fetch in components) both need to send request & then have to deal with 
//failing req, loading req & succeded req

import { useCallback, useEffect, useState } from "react";

//step-2 : this is a lil utility function , which wrap the general http req sending logic
//params are: url-for link to fetch, config which is type of req tht send(i.e., get or post)
async function sendHttpRequest(url, config, ) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }
  return resData;
}

//step-1: custom hooks must start with use
//now in this custom i want to send http req
// in tht comp the req shld not be sent directly after every render of compo
//because if you see in checkout compo, req sends only on onsubmit function
export default function useHttp(url, config, initialData) {
    //step-3: this states are for managing the ui updates based on loading, data , error
    //thsi is to manage the success state
  const [data, setData] = useState(initialData);
  //this is to manage loading state
  const [isLoading, setIsLoading] = useState(false);
  //this is to manage error if any occurs
  const [error, setError] = useState();

  function clearData(){
    setData(initialData)
  }
  //step-6 : here we end up in infinite loop bcz of we r updating state in it & using useEfct
  //so we'll use useCallback to solve this
  const sendRequest = useCallback(
    //initially this functin is not being called by here
    //bcz in the end it needs to be called in diff places
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, {...config, body: data});
        setData(resData);
      } catch (error) {
        setError(error.message || "something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  //step-5 : to make it convinient we r using useEffect & calling sendReq in it
  //sendReq is the dependency bcz its defined outside of the req func
  useEffect(() => {
    //we r configuring this bcz, initially it sends the rreq, but that is not we want in checkout
    //so checking condition based on config i.e., only if config method id get or no config is 
    //provided , then sendreq will be sent directly
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  //step-4: returning the data
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  };
}
