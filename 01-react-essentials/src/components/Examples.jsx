// fragments can also be  used <> </> , <fragment> </fragment>

//splitted the components by feature & state

import { useState } from "react";
import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
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
    <Section title="Examples" id="examples">
      {/* <h2>Examples</h2> */}
      {/* //onSelect is passing as props to the TabButtons component */}
      {/* //for passing the appropriate value to the onClick event,
             here we r using it as an arrow function & passing an argument to it , 
             so that with that argument we can get to know which button was clicked */}

      {/* here actually handleSelect is a function passed to the props onSelect,
             but since we need to pass a argument to determine which handleSelect
             button was clicked, we converted the handleSelect function as arrow function 
             & passed an argument to it for each of the function */}

      {/* here I am passing value to the isSelected props based on the condition,
             that if the selectedTopic is components it is passed such like that */}
      <Tabs
        // buttonsContainer="menu"
        buttons={
          <>
            <TabButtons
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButtons>
          </>
        }
      >
        {tabContent}
      </Tabs>

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
    </Section>
  );
}
