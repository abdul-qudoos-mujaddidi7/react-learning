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
     function handleRating(rating){
        setRating(rating)
    }
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
            <Star key={i}  onRate={()=>handleRating(i+1)} full={rating>=i+1}/>
          
        ))}
      </div>
      <div style={textStyle}>{rating ||""}</div>
    </div>
  );
}

function Star({onRate, full}){
   
    return <span role="button"  onClick={onRate}>{full ?"⭐":"😁"}</span>
}
