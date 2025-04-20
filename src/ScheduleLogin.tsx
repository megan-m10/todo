import React from "react";
import "./ScheduleLogin.css";
import { useState } from 'react'
import { Input } from 'antd-mobile'


const ScheduleLogin = () => {
    return (
        <div className="Background">
            <div className="CenterInformation">
                <div>Sign In
                </div>
                <Input placeholder='请输入内容' clearable />
            </div>
        </div>
    );
};

export default ScheduleLogin;
