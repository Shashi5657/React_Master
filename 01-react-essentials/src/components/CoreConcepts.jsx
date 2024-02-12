import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";


export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {/* //here used mapping function to display the data from coreConcepts to here */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* //we r passing title description, image as props to the CoreConcept component,
   so we can display other'd data with the same styling & everything */}
        {/* <CoreConcept
    title={CORE_CONCEPTS[0].title}
    description={CORE_CONCEPTS[0].description}
    image={CORE_CONCEPTS[0].image}
  />

  {/* //here we used spread operator(...) to import all the data from the mentioned data content  */}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} />
  <CoreConcept {...CORE_CONCEPTS[2]} />
  <CoreConcept {...CORE_CONCEPTS[3]} />  */}
      </ul>
    </section>
  );
}
