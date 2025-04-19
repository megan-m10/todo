import React from "react";
import "./css1.css";

const Css1 = () => {

    return (
        <div className={"css1-container"}>
            <h1>h1</h1>
            <h2>h2</h2>
            <label
                style={{
                    fontSize: '60px',
                }}
            >label</label>

            <label
               className={"css1-label"}
            >label</label>

            <p className={"css1-p"}>p</p>

            <div className={"css1-div"}>
                <span>span</span>
            </div>

            <div className={"css1-div-1"}>
            </div>
        </div>
    )
}

export default Css1;
