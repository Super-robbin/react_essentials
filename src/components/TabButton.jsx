// Even if you're not setting any attributes,
// React will still give you a props object.
// It will just be an object that's pretty empty,
// but actually not entirely empty.
// Instead there is one prop which you will always get,
// the special, built-in CHILDREN prop.

// Instead, this children prop here simply refers
// to the content between your component text.
// It is called component composition.
// i.e. "Components" in App.jsx

// onClick prop is a built-in element that listens to the click event and points to a function.
// The handleClick function can be passed from the parent component too (App.jsx) and then be forwarded
// to the onClick prop here.

const TabButton = ({ children, onSelect }) => {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;