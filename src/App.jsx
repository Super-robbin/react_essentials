import { useState } from "react";
import Header from "./components/header/Header.jsx";
import CoreConcept from "./components/coreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples.js";

// useState is the Hook that will allow us to manage some component specific state,
// which is simply some data stored by React, you could say,
// which when changed, will trigger this component function
// to which this Hook belongs to re-execute, to be reevaluated by React, you could say.

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={index} {...conceptItem} />
            ))}

            {/*
            OR you can use the way below:
            
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={index} conceptItem={conceptItem} />
            ))}

            AND then pass ({conceptItem}) to component
            */}


            {/* 
            We have to use key inside the component as unique identifier,
            otherwise we get a warning saying that:
            Each child in a list should have a unique "key" prop.
            We used title for now because each item in the list has a different title.
            */}

            {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
            {/* 
            We can either use the spread operator above to pass the entire first [0] object in the CORE CONCEPTS ARRAY,
            or we can pass each individual data like we did below
            */}
            {/* // <CoreConcept
            //   title={CORE_CONCEPTS[1].title}
            //   description={CORE_CONCEPTS[1].description}
            //   image={CORE_CONCEPTS[1].image}
            // /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* 
            We use the handleSelect with the identifier inside to check which button has been clicked,
            although it executes the same function, we get different values for different buttons.
            */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* 
          If selectedTopic is equal to undefined(not truthy) show <p>
          OR 
          If selectedTopic is not equal to undefined(truthy) show <div>

          Alternatively, we can use the && on both:
          {!selectedTopic && <p>Please select a topic.</p>}
          Meaning that if we don't have a selectedTopic, the <p> above would be output.
          */}
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;