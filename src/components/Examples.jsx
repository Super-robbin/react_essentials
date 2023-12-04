import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

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
    // We replace the <section> below with our custom Section component.
    // IMPORTANT: We need to forward the id="examples" to the component, otherwise CSS will break.
    // Option 1 - We pass id as prop and inside the Section, in the section element we use id={id}
    // Option 2 - We pass ({title, children, ...props}), this JS syntax is called "Rest property".
    // It groups all remaining object properties into a new object (named "props" in this case).
    // <section {...props}> will now basically ensure that all extra props,
    // that might be set on our custom Section component here,
    // will be forwarded to this built-in Section element.

    <Section title="Examples" id="examples">
      <Tabs

      // We used the buttons={<TabButton></TabButton>} as a prop to pass into the Tabs component
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
};

export default Examples;