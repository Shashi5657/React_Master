// we have to use images by importing like this, so it would be efficient , if we use path , it would get lost while deployment
import reactImg from "../assets/react-core-concepts.png";


//***** Creating the dynamic content(changing content ) *****

// getting dynamic value
const changingWords = ["Fundamental", "Crucial", "Core"];
function generateWordsFromArray(max) {
  return Math.floor(Math.random() * (max + 1));
}

//***** * created component *******
export default function Header() {
  // getWords will get the diff words from the provided array
  const getWords = changingWords[generateWordsFromArray(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* outputting dynamic value */}
        {getWords} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}