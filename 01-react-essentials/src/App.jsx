import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      {/* invoked the component here  */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

// in this section we built this beautiful interactive demo web appear with React,
//  while building this we learned about all the core concepts mentioned in the site...
// we learned that react is all about components & we learned how to build react components,
// components in the end are simply functions,
// how to configure components with props
// outputting dynamic content with curly braces
// special children props, which allow us to share content between opening & closing tags of component
// components , props & jsx are all super important features
// listen to events
// to update ui u must use state hook
// it allows yo to manage & update ui
// ternary operators- ? : , logical and &&
// mapping function
