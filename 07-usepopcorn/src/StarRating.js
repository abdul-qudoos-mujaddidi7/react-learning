import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const startContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margine: "0",
};

export default function StarRating({maxRating =5}) {
    const [rating, setRating]=useState(0)
    const [temp, setTemRating]=useState(0)
     function handleRating(rating){
        setRating(rating)
    }
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
            <Star key={i}  onRate={()=>handleRating(i+1)} full={temp?temp>=i+1:rating>=i+1} onHoverIn={()=>setTemRating(i+1)} onHoverOut={()=>setTemRating(0)}/>
          
        ))}
      </div>
      <div style={textStyle}>{ temp|| rating ||""}</div>
    </div>
  );
}

function Star({onRate, full, onHoverIn, onHoverOut}){
    return <span role="button"  onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>    
  {full ?"⭐":"😁"}</span>
}
