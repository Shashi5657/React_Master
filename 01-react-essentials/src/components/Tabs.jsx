import { Children } from "react";

export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

// buttonsCOntainer = ButtonsContainer can be directly used
