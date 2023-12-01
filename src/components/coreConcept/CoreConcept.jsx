// Props is the name typically chosen for the parameter passed.

// Therefore, React will pass a value for this props parameter
// to this function when it calls it,
// and the value that will be passed for this parameter
// to this function by React will be an object,
// and it will be an object that has all these key value pairs.
// i.e. title as KEY and "Components" as VALUE

// Alternatively, we can use object destructuring,
// meaning that we can target the different properties of the incoming object by name.
// So here, we have to use the same properties as we're setting here as props.
// So title, description, image.
// Also, here in this object, image, title, description, we have to use these exact same words here
// between those curly braces.
// But when doing so, JavaScript will then go ahead and give us these three properties
// as standalone variables in this function here.

// i.e. const CoreConcept = ({ image, title, description })

// IMPORTANT: And you can use this object destructuring syntax here
// with that longer (title={CORE_CONCEPTS[1].title}) or that shorter ({...CORE_CONCEPTS[0]}) props version here

const CoreConcept = (props) => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default CoreConcept;