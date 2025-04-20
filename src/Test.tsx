import React from "react";

interface TestProps{
    text:string;
}

const Test:React.FC<TestProps> = (props)=>{
    const text = props.text;

    return (
        <span style={{
            backgroundColor:'#10f895'
        }}>
            {text}
        </span>
    )
}

export default Test;
