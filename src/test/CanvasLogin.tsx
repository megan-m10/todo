import React from 'react';
import "./CanvasLogin.css";
import type {CheckboxProps} from 'antd';
import {Button, Checkbox, Form, Input} from "antd";
import {useForm} from "antd/es/form/Form";
import {login} from "../api/account";
import {useNavigate} from "react-router";


const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const CanvasLogin = () => {

    const [form] = useForm();

    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    return (
        <div className="CanvasLogin">
            <div className={"Placeholder1"}></div>
            <div className={"Information"}>
                <div className={"TopPortion"}></div>

                <div className={"MiddlePortion"}>
                    <Form
                        form={form}
                        onFinish={(values) => {
                            setLoading(true);
                            login(values)
                                .then(res => {
                                    console.log(res);
                                    navigate("/");
                                })
                                .catch((error)=>{

                                })
                                .finally(()=>{
                                    setLoading(false);
                                })
                        }}
                    >
                        <div className={"MiddleTop"}>
                            <div className={"Subtitle1"}>
                                Email or username
                            </div>
                            <Form.Item
                                name="text1"
                                className={"textbox1"}
                                rules={[
                                    {
                                        required: true,
                                        validator:(rule, value, callback)=>{
                                            if(!value){
                                                callback('请输入邮箱或用户名');
                                                return;
                                            }

                                            // 正则表达式 用于验证用户名是否邮箱
                                            let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                                            if(!reg.test(value)) {
                                                callback('请输入正确格式的邮箱');
                                                return;
                                            }
                                            callback();
                                        }
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Username"
                                    size="large"
                                />
                            </Form.Item>
                        </div>

                        <div className={"MiddleMiddle"}>
                            <div className={"Subtitle2"}>
                                Password
                            </div>
                            <Form.Item
                                name="text2"
                                className={"textbox2"}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input placeholder="Password" size="large"/>
                            </Form.Item>
                        </div>

                        <div className={"MiddleBottom"}>
                            <div className={"MiddleBottomLeft"}>
                                <Checkbox className="checkbox" onChange={onChange}>
                                    Stay signed in
                                </Checkbox>
                                <div className={"ResetPassword"}>
                                    Forgot Password?
                                </div>
                            </div>
                            <div className={"MiddleBottomRight"}>
                                <Button
                                    loading={loading}
                                    className={"LogInButton"}
                                    onClick={() => {
                                        form.submit();
                                    }}
                                >
                                    Log In
                                </Button>
                            </div>
                        </div>

                    </Form>
                </div>

                <div className={"BottomPortion"}></div>

            </div>

            {/*<div className={"Placeholder2"}>*/}
            {/*    <div>*/}
            {/*        <p>Entered Username: {text1}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}

export default CanvasLogin;
