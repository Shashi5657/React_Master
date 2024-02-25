import { useState } from "react";

export default function UserInput() {
//define3d state here for updating the userInput values ,
// defined all the input values as a single object
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestmemnt: 1200,
    expectedReturn: 6,
    duration: 10,
  });
//defined this function for handling the changes in input values, 
// single function for all the input values, used parameters so that it would work for all inputs
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            // we must the assign the value to the value prop in input fields
            // value here is set from the object
            value={userInput.initialInvestment}
            // here used arrow function to pass arguments& eventr value
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestmemnt}
            onChange={(event) =>
              handleChange("annualInvestmemnt", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
