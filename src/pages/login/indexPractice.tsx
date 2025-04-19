import React from 'react';
import "./index.css";
import {Button, Checkbox, Form, Input} from "antd";
// import {login} from "../../api/account";
import {loginPractice} from "../../api/loginPractice";
import {useNavigate} from "react-router";

const IndexPractice = () => {

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const [signin, setSignin] = React.useState(false);

    return (
        <div className="CanvasLogin">
            <div className={"Placeholder1"}></div>
            <div className={"Information"}>
                <div className={"TopPortion"}></div>

                <div className={"MiddlePortion"}>
                    <Form
                        form={form}
                        onFinish={(values) => {
                            loginPractice(values)
                                .then(res => {
                                    if (res.success) {
                                        navigate('/CourseRequest');
                                    } else {
                                        alert('Login Failed');
                                    }
                                })
                        }}
                    >
                        <div className={"MiddleTop"}>
                            <div className={"Subtitle1"}>Email or username</div>
                            <Form.Item name="username" className={"textbox1"}>
                                <Input placeholder="Username" size="large"/>
                            </Form.Item>
                        </div>

                        <div className={"MiddleMiddle"}>
                            <div className={"Subtitle2"}>Password</div>
                            <Form.Item name="password" className={"textbox2"}>
                                <Input placeholder="Password" size="large" type="password"/>
                            </Form.Item>
                        </div>

                        <div className={"MiddleBottom"}>
                            <div className={"MiddleBottomLeft"}>
                                <Form.Item name="signin" valuePropName="checked">
                                    <Checkbox className="checkbox">
                                        Stay signed in
                                    </Checkbox>
                                </Form.Item>


                                <div className={"ResetPassword"}>Forgot Password?</div>
                            </div>
                            <div className={"MiddleBottomRight"}>
                                <Button
                                    className={"LogInButton"}
                                    htmlType="submit"
                                >
                                    Log In
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>

                <div className={"BottomPortion"}></div>
            </div>
        </div>
    );
};

export default IndexPractice;
