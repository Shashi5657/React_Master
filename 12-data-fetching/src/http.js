export async function fetchAvailablePlaces(){
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
    //this is used to handle errors, i.e., if response was not ok then it throws error
    if (!response.ok) {
      throw new Error("Failed to fetch Places");
    }

    return resData.places
}

export async function fetchUserPlaces(){
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();
    //this is used to handle errors, i.e., if response was not ok then it throws error
    if (!response.ok) {
      throw new Error("Failed to fetch user Places");
    }

    return resData.places
}

export async function updateUserPlaces(places){
   const response = await fetch('http://localhost:3000/user-places', {
        method : 'PUT',
        body : JSON.stringify({ places }),
        headers : {
            "Content-Type" :  'application/json'
        }
    })

    const resData = await response.json();

    if(!response.ok) {
        throw new Error('Failed to update the user data')
    }

    return resData.message
}