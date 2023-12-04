import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data-with-examples";

const CoreConcepts = () => {
  return (
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
  );
};

export default CoreConcepts;