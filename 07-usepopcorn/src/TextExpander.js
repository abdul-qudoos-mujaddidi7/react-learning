import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        expanded={false}
        className="box"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

    
    </div>
  );
}

function TextExpander({children,expanded,collapsedNumWords,expandButtonText,collapseButtonText,buttonColor,className}) {
    const [isExpanded, setIsExpanded] = useState(expanded);
  return <div className={className}>
    {isExpanded ? children : children.split(" ").slice(0,collapsedNumWords).join(" ")}
    <span role="button" style={{color:buttonColor  , cursor: "pointer"}} onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? collapseButtonText : expandButtonText}</span>
    </div>;
}
