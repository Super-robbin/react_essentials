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

// We can also set the className DYNAMICALLY, by using these curly braces,
// which we always use if we need some dynamic or JavaScript-based value.
// Here, we could use a TERNARY expression again.
// Because, just as we can output content conditionally with ternary expressions and some other approaches,
// we can also set ATTRIBUTES conditionally.
// Here, we can set its className either to active, if isSelected is TRUE, 
// OR to an empty string, or undefined, both is valid if this is currently not selected,
// so that this button has NO CLASS if it's not selected,
// but it has the ACTIVE class if it is selected.

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
