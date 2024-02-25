import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  //define3d state here for updating the userInput values ,
  // defined all the input values as a single object
  //here we have done state uplifting
  //which mean shifted this userInput & its related function from the child component(userInput)
  //to its parent component(App.jsx) , so we can use this in the userInput & results component
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  //defined this function for handling the changes in input values,
  // single function for all the input values, used parameters so that it would work for all inputs
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        //in javascript the input value is considered as a string while passing as event value
        //so if we use + here it forces the string to change to number value, so it adds
        // not concatinates
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
