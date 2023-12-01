import { useState } from "react";
import Header from "./components/header/Header.jsx";
import CoreConcept from "./components/coreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

// useState is the Hook that will allow us to manage some component specific state,
// which is simply some data stored by React, you could say,
// which when changed, will trigger this component function
// to which this Hook belongs to re-execute, to be reevaluated by React, you could say.

const App = () => {
  const [tabContent, setTabContent] = useState('Please click a button')

  const handleSelect = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setTabContent(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />

            {/* 
            We can either use the spread operator above to pass the entire first [0] object in the CORE CONCEPTS ARRAY,
            or we can pass each individual data like we did below
            */}

            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* 
            We use the handleSelect with the identifier inside to check which button has been clicked,
            although it executes the same function, we get different values for different buttons.
            */}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
};

export default App;
