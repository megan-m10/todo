import {Button, Form, Input, message} from "antd";
import React from "react";
import "./SetAccount.css"
import {useNavigate} from "react-router";
import {register} from "./api/account";

const SetAccount=() =>{
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleRegister = (values:any)=>{
       register(values)
           .then((res)=>{
                if(res){
                    message.info('注册成功');
                    navigate('/ScheduleLogin');
                }else {
                    message.info('注册失败');
                }
            })
    }

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
                        <Form
                            form={form}
                            onFinish={(values)=>{
                                handleRegister(values);
                            }}
                        >
                            <div className={"TwoInput-register"}>
                                <Form.Item name="username" >
                                    <Input
                                        className={"Username-register"}
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item name="password" >
                                    <Input
                                        className={"Password-register"}
                                        placeholder="Password"
                                        type="password"
                                    />
                                </Form.Item>

                            </div>

                        </Form>
                        {/*<div className={"Content"}></div>*/}

                    </div>
                    <div className={"Bottom"}>
                        <Button
                            className={"CreateAccountButton"}
                            onClick={()=>{
                                form.submit();
                            }}
                        >
                            Create Account
                        </Button>
                    </div>
                    <div className={"Placeholder"}></div>

                {/*</Form>*/}


            </div>
        </div>
    )
}
export default SetAccount
