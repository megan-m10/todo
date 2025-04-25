import {Button, Form, Input} from "antd-mobile";
import React from "react";
import "./SetAccount.css"
import {useNavigate} from "react-router";
import {AccountManagement} from "./api/AccountManagement";

const SetAccount=() =>{
    const [form] = Form.useForm();
    const navigate = useNavigate();


    return (
        <div className={"Background"}>
            <div className={"CenterInformation-register"}>
                {/*<Form className="Form">*/}
                    <div className={"Top"}>
                        <div className={"Title"}>
                            Set Account
                        </div>
                    </div>
                    <div className={"Middle"}>
                        <Form form={form}>
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
                        </Form>
                        {/*<div className={"Content"}></div>*/}

                    </div>
                    <div className={"Bottom"}>
                        <Form form={form}>
                            <Button
                                className={"CreateAccountButton"}
                                fill='outline'
                                // onClick={handleSubmit}
                            >
                                Create Account
                            </Button>
                        </Form>

                    </div>
                    <div className={"Placeholder"}></div>

                {/*</Form>*/}


            </div>
        </div>
    )
}
export default SetAccount
