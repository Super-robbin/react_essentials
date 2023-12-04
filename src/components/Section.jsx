// We create the Section component as a wrapper that can be used,
// which has a title and a children (content)

const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;