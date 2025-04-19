import React from 'react';
import "./index.css";
import {Button, Checkbox, Form, Input} from "antd";
import {login} from "../../api/account";
import {useNavigate} from "react-router";

const Index = () => {

    const [form] = Form.useForm(); // [form]


    const test = ()=>{
        return [1]
    }


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
                            login(values)
                                .then(res => {
                                    if(res.success){
                                        navigate('/product')
                                    }else {
                                        alert('登陆失败.')
                                    }
                                });
                        }}

                    >
                        <div className={"MiddleTop"}>
                            <div className={"Subtitle1"}>
                                Email or username
                            </div>
                            <Form.Item
                                name="username"
                                className={"textbox1"}
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
                                name="password"
                                className={"textbox2"}
                            >
                                <Input placeholder="Password" size="large"/>
                            </Form.Item>
                        </div>

                        <div className={"MiddleBottom"}>
                            <div className={"MiddleBottomLeft"}>
                                <Checkbox className="checkbox">
                                    Stay signed in
                                </Checkbox>
                                <div className={"ResetPassword"}>
                                    Forgot Password?
                                </div>
                            </div>
                            <div className={"MiddleBottomRight"}>
                                <Button
                                    className={"LogInButton"}
                                    onClick={() => {
                                        form.submit();
                                    }}
                                >
                                    Log In
                                </Button>

                                <Button
                                    className={"LogInButton"}
                                    onClick={() => {
                                        const body = form.getFieldsValue();
                                        alert(JSON.stringify(body));

                                        const username = form.getFieldValue('username');
                                        alert(username);
                                    }}
                                >
                                    Test1
                                </Button>

                                <Button
                                    className={"LogInButton"}
                                    onClick={() => {
                                        form.setFieldValue('username', '123');
                                    }}
                                >
                                    Test2
                                </Button>

                                <Button
                                    className={"LogInButton"}
                                    onClick={() => {
                                        const [a] = test();
                                        console.log(a)

                                        const b= test();
                                        console.log(b)
                                    }}
                                >
                                    Test3
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

export default Index;
