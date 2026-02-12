const containerStyle={
    display:"flex",
    alignItems:"center",
    gap:"16px"
}

const startContainerStyle={
    display:"flex",
    gap:"4px"
}

const textStyle={
    lineHeight:"1",
    margine:"0"
}


export default function StarRating(){
    return <div style={containerStyle}>
        <div style={startContainerStyle}>
            {Array.from({length:5}, (_,i)=><span key={i}>⭐</span>)}
        </div>
        <div style={textStyle}>10</div>
    </div>
}