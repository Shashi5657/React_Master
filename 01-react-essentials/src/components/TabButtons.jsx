export default function (props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
