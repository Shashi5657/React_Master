import { useState } from "react";

export default function UserInput(userInput, onChangeInput) {
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
              onChangeInput("initialInvestment", event.target.value)
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
              onChangeInput("annualInvestmemnt", event.target.value)
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
              onChangeInput("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChangeInput={(event) => onChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
