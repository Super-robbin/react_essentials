// Another wrapper component

const Tabs = ({ children, buttons, buttonsContainer }) => {
  // We can't use buttonsContainer directly, we have to first store it within ButtonsContainer (capital letter),
  // and then use it.

  // Now what React will take a look at the value stored in buttonsContainer
  // and that will be the value received on this buttonsContainer prop.

  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;