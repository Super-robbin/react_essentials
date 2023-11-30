import Header from "../src/components/Header";
import CoreConcept from "../src/components/CoreConcept";
import { CORE_CONCEPTS } from "./data.js";

const App = () => {
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
      </main>
    </div>
  );
};

export default App;
