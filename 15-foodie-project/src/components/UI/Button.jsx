//created this UI block for the button
//we have two types of button such as textonly button and other button,
//for styling purposes we have used cssClasses
//with children prop. we can manage the content within the components, such as text bw buttons
//textonly prop returns true if its text button
//className is used to add additional styles
//...props is a spread operator used to add additional functionality such as 
//onClick, type etc to the button

export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return <button className={cssClasses} {...props} >{children}</button>;
}
