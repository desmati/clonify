import "./Section.css";

//exporting the props
export function Section({ children, title }) {
  return (
    <div className="section__container">
      {/* setting the props */}
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
