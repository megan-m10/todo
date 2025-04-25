import React from "react";
import "./ScheduleLogin.css";
import { Form, Input, Button } from 'antd-mobile';
import { useNavigate } from "react-router";
import { login } from "./api/Login";

const ScheduleLogin = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = async () => {//空的用户名和密码会报错
        try {
            const values = await form.validateFields();
            const res = await login(values);

            if (res.success) {

                navigate('/ReminderSchedule');
            } else {
                alert('Login Failed');
            }
        } catch (error) {
            console.error("Login form error:", error);
        }

    };

    return (
        <div className="Background">
            <div className="CenterInformation-login">
                    <Form form={form}>
                        <div className={"UpperPortion"}>
                            <div className="Title">Sign In</div>
                            <Form.Item name="username" className={"TwoInput"}>
                                <Input
                                    className={"Username"}
                                    placeholder="Username"
                                    clearable
                                />
                            </Form.Item>
                            <Form.Item name="password" className={"TwoInput"}>
                                <Input
                                    className={"Password"}
                                    placeholder="Password"
                                    clearable
                                    type="password"
                                />
                            </Form.Item>

                        </div>
                        <div className={"LowerPortion"}>
                            <div className={"Buttons"}>
                                <div className={"OtherHelp"}>
                                    <span
                                        className="CreatAcoount"
                                        onClick={() => {
                                            navigate('/SetAccount');
                                        }}
                                    >Don't have an account? Sign up
                                    </span>
                                    <span
                                        className="ResetLink"
                                        onClick={() => {
                                            alert('Redirect to password reset');
                                            navigate('/ReminderSchedule');
                                        }}
                                    >Forgot password?
                                    </span>
                                </div>
                                <Button
                                    className={"LogInButton"}
                                    fill='outline'
                                    onClick={handleSubmit}
                                >
                                    Log in
                                </Button>
                            </div>
                        </div>
                    </Form>
            </div>
        </div>
    );
};

export default ScheduleLogin;
