//created this section component so we can simply pass our diff sections through this component
// ...props is a forwarded props, which can be used if many props are need to be passed
// with ...props we can directly pass the values as props from the main app to this component

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
