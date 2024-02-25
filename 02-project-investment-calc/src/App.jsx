import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
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
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Results input={userInput}/>
    </>
  );
}

export default App;
