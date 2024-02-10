import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButtons from "./components/TabButtons";
import { useState } from "react";
import {EXAMPLES} from './data'

function App() {

  const[selectedTopic, setSelectedTopic] = useState('components')

  function handleSelect(selectedComponent) {
    setSelectedTopic(selectedComponent)
    console.log(selectedComponent)
  }

  return (
    <div>
      {/* invoked the component here  */}
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={()=> handleSelect('components')}>Components</TabButtons>
            <TabButtons onSelect={()=> handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons onSelect={()=> handleSelect('props')}>Props</TabButtons>
            <TabButtons onSelect={()=> handleSelect('state')}>State</TabButtons>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
