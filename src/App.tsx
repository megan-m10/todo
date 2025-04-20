import React from 'react';
import {Button, Col, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {CalculateService} from "./caculate";

interface MyButtonProps {
    text: React.ReactNode | string;
    disabled?: boolean;
    onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = (props) => {

    return (
        <Button
            style={{
                width: '100%'
            }}
            disabled={props.disabled}
            onClick={() => {
                if (props.onClick) {
                    props.onClick();
                }
            }}
        >
            {props.text}
        </Button>
    )
}

const App = () => {

    const [text, setText] = React.useState<string>('');

    const calculateService = new CalculateService(
        text,
        (calculate: string) => {
            setText(calculate);
        }
    );

    return (
        <div>
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <TextArea
                        value={text}
                        readOnly={true}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={<ArrowLeftOutlined/>}
                        onClick={() => {
                            setText(text.slice(0, text.length - 1));
                        }}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'+/-'}
                        disabled={calculateService.disable('+/-')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'%'}
                        disabled={calculateService.disable('%')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'/'}
                        onClick={() => {
                            setText(text + '/');
                        }}
                        disabled={calculateService.disable('/')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'7'}
                        onClick={() => {
                            setText(text + '7');
                        }}
                        disabled={calculateService.disable('7')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'8'}
                        onClick={() => {
                            setText(text + '8');
                        }}
                        disabled={calculateService.disable('8')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'9'}
                        onClick={() => {
                            setText(text + '9');
                        }}
                        disabled={calculateService.disable('9')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'*'}
                        onClick={() => {
                            setText(text + '*');
                        }}
                        disabled={calculateService.disable('*')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'4'}
                        onClick={() => {
                            setText(text + '4');
                        }}
                        disabled={calculateService.disable('4')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'5'}
                        onClick={() => {
                            setText(text + '5');
                        }}
                        disabled={calculateService.disable('5')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'6'}
                        onClick={() => {
                            setText(text + '6');
                        }}
                        disabled={calculateService.disable('6')}
                    />
                </Col>
                <Col span={6}>
                    <MyButton
                        text={'-'}
                        onClick={() => {
                            setText(text + '-');
                        }}
                        disabled={calculateService.disable('-')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'1'}
                        onClick={() => {
                            setText(text + '1');
                        }}
                        disabled={calculateService.disable('1')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'2'}
                        onClick={() => {
                            setText(text + '2');
                        }}
                        disabled={calculateService.disable('2')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'3'}
                        onClick={() => {
                            setText(text + '3');
                        }}
                        disabled={calculateService.disable('3')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'+'}
                        onClick={() => {
                            setText(text + '+');
                        }}
                        disabled={calculateService.disable('+')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={''}
                        disabled={true}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'0'}
                        onClick={() => {
                            setText(text + '0');
                        }}
                        disabled={calculateService.disable('0')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'.'}
                        onClick={() => {
                            setText(text + '.');
                        }}
                        disabled={calculateService.disable('.')}
                    />
                </Col>

                <Col span={6}>
                    <MyButton
                        text={'='}
                        disabled={calculateService.disable('=')}
                        onClick={() => {
                            calculateService.answer();
                        }}
                    />
                </Col>
            </Row>
        </div>
    )

}

export default App;
