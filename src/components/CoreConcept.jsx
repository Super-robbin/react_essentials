// Props is the name typically chosen for the parameter passed.

// Therefore, React will pass a value for this props parameter
// to this function when it calls it,
// and the value that will be passed for this parameter
// to this function by React will be an object,
// and it will be an object that has all these key value pairs.
// i.e. title as KEY and "Components" as VALUE

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