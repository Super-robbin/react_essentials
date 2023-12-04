import { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import TabButton from "../TabButton";

// useState is the Hook that will allow us to manage some component specific state,
// which is simply some data stored by React, you could say,
// which when changed, will trigger this component function
// to which this Hook belongs to re-execute, to be reevaluated by React, you could say.

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  };

  return (
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
  );
};

export default Examples;