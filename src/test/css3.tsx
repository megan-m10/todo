import React from "react";
import "./css3.css";
import {RightOutlined} from "@ant-design/icons";

const Css3 = () => {

    for(let i=0;i<50;i++){
        console.log(i);
    }

    return (
        <div>
            <div className={"css3-header"}>
                我的通讯录
            </div>
            <div className={"css3-container"}>
                {Array.from({length: 50}).map((item, index) => {
                    return (
                        <div className={"list-item"} key={index}>
                            <div className={"item-content"}>
                                <span>span {"item"}</span>
                            </div>
                            <div className={"item-arrow"}>
                                <RightOutlined/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={"css3-footer"}>
                <div className={"css3-footer-item"}></div>
                <div className={"css3-footer-item"}></div>
                <div className={"css3-footer-item"}></div>
                <div className={"css3-footer-item"}></div>
            </div>
        </div>
    )
}

export default Css3;
