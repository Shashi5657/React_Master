//******  creating & using props here ********

export default function CoreConcept(props) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    );
  }