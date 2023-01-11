import "../../Styles/Body/Section.css";

export function Section({ children, title }) {
  return (
    <div className="section__container">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
