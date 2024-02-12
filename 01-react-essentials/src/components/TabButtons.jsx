export default function ({ isSelected, children, ...props}) {
  return (
    <li>
      {/* //we r getting onSelect as props from the app.js,
       where here it is assigned for the onClick event handler */}
       {/* we r passing classname dynamically & using a prop isSelected here */}
      <button className={isSelected ? 'active' : ''}  {...props} >{children}</button>
    </li>
  );
}

// onClick={props.onSelect}
