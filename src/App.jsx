import Header from "./components/header/Header.jsx";
import CoreConcept from "./components/coreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx"
import { CORE_CONCEPTS } from "./data.js";

const App = () => {

  let tabContent = 'Please click a button'

const handleSelect = (selectedButton) => {
  // selectedButton => 'components', 'jsx', 'props', 'state'
  console.log(selectedButton)
}

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
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
};

export default App;