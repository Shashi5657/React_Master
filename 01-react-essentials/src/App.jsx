import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButtons from "./components/TabButtons";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  // ****** using state hook , it is used for changing content *******
  const [selectedTopic, setSelectedTopic] = useState();

  // //defined a handleSelect function & passing the argument selectedComponent ,
  // so that we'll get to know which button as clicked
  function handleSelect(selectedComponent) {
    setSelectedTopic(selectedComponent);
    console.log(selectedComponent);
  }

  // ********* Rendering content conditionally in 3rd way ******
  let tabContent = <p>Please select a Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      {/* invoked the component here  */}
      <Header />
      <main>
        <section id="core-concepts">
          <ul>

     {/* //we r passing title description, image as props to the CoreConcept component,
             so we can display other'd data with the same styling & everything */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

  {/* //here we used spread operator(...) to import all the data from the mentioned data content  */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            
            {/* //onSelect is passing as props to the TabButtons component */}
            {/* //for passing the appropriate value to the onClick event,
             here we r using it as an arrow function & passing an argument to it , 
             so that with that argument we can get to know which button was clicked */}

             {/* here actually handleSelect is a function passed to the props onSelect,
             but since we need to pass a argument to determine which handleSelect
             button was clicked, we converted the handleSelect function as arrow function 
             & passed an argument to it for each of the function */}            

            <TabButtons onSelect={() => handleSelect("components")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect("props")}>
              Props
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("state")}>
              State
            </TabButtons>
          </menu>

          {tabContent}

          {/* // ********* Rendering content conditionally in 2nd way ****** */}

          {/* {!selectedTopic ? (
            <p>Please select a Topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* // ********* Rendering content conditionally in 1st way ****** */}

          {/* {!selectedTopic && <p>Please select a Topic</p>}
           {selectedTopic && <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>} */}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
