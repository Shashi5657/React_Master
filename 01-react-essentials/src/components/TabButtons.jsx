export default function (props) {
  return (
    <li>
      {/* //we r getting onSelect as props from the app.js,
       where here it is assigned for the onClick event handler */}
       {/* we r passing classname dynamically & using a prop isSelected here */}
      <button className={props.isSelected ? 'active' : ''} onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
