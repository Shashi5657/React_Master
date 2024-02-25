export default function UserInput({onChangeInput, userInput}) {
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
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
