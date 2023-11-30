import reactImg from '../assets/react-core-concepts.png'

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Above function is used to generate a random integer, 
// which will the be used as index to replace the first word of the paragraph
// with a random word from reactDescriptions. We use curly braces to output a dynamic value.

// IMPORTANT: if-statements, for-loops, function definitions and other block statements are not allowed here.
// Only expressions that direcly produce a value

const Header = () => {

  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;