import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  //here insted of using multiple states, we used a one combined state
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  //here this is validate on lost focus,errors may be shown for too long
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  //this is a validation step, it checks on every keystroke
  //this method is validating on keystroke, here error is shown too early
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  //this is one generic function for all the value changes
  //it takes one identifier as an argument to update the certain values
  //we must not lost the prev values while updating current ones so used prevvalues
  // here used brackets over paranthesis to clear the javascript
  //to update one value , that value is identified by the "identifier argument"
  // here we use js syntax [] to dynamically access the values in n object
  function handleInputChange(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);

    //this is used to reset in state management
    // setEnteredValues({
    //     email : '',
    //     password : ''
    // })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid Email.'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange("password", event)}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password.'}
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=> handleInputBlur('email')}
            //to gain control over the function, we wrapped it as anonymous function
            //it gets event obj as an input
            // we pass the identifier here
            onChange={(event) => handleInputChange("email", event)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p> Please enter a valid Email.</p>}</div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            //to gain control over the function, we wrapped it as anonymous function
            //it gets event obj as an input
            // we pass the identifier here
            onChange={(event) => handleInputChange("password", event)}
            value={enteredValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        {/* here type reset is a buitin function which will resets the input values */}
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
