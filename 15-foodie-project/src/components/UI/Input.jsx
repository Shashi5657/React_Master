//this is the ui block for input elements
//passing props & spread operator for adding additional functions or values
export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label} </label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
