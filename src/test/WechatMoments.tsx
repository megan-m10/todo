import React from 'react';
import "./WechatMoments.css"
import {CameraOutlined, LeftOutlined, RightOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar} from 'antd';

const WechatMoments = () => {

    return (
        <div className={"wechat-background"}>
            <div className={"wechat-header"}>
                <div className={"wechat-header-nav"}>
                    <LeftOutlined className="wechat-header-nav-left"/>
                    <h2 className="wechat-header-nav-right">···</h2>
                </div>
            </div>
            <div className={"wechat-user"}>
                <div className={"wechat-user-avatar"}>
                    <div className={"wechat-user-avatar-username"}>M.</div>
                    <Avatar className={"wechat-user-avatar-icon"} shape="square" icon={<UserOutlined/>}/>
                </div>
                <div className={"wechat-user-slogan"}>
                    <div>我以落花之名，祝你前程似锦</div>
                </div>
            </div>

            <div className={"wechat-content"}>
                <div className={"wechat-content-top"}>
                    <div className={"wechat-content-top-title"}>置顶</div>
                    <div className={"wechat-content-top-images"}>
                        <img className={"wechat-content-top-images-item"}
                             src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}/>
                        <img className={"wechat-content-top-images-item"}
                             src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}/>
                    </div>
                    <RightOutlined className="wechat-content-top-right"/>
                </div>

                <div className={"wechat-content-push"}>
                    <div className={"wechat-content-push-title"}>今天</div>
                    <div className={"wechat-content-push-button"}>
                        <CameraOutlined className={"wechat-content-push-button-icon"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WechatMoments;
