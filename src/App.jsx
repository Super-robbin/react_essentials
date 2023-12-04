import Header from "./components/header/Header";
import CoreConcepts from "./components/coreConcept/CoreConcepts";
import Examples from "./components/coreConcept/Examples";

const App = () => {
  return (
    // If I delete the <div> below, I am getting an error,
    // that JSX expressions must have one parent element.
    // Header and main are two siblings elements.
    // We import and use Fragment(<> - </>) instead of the <div>, which is a react component,
    // so that we don't have an unnecessary element.
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
};

export default App;