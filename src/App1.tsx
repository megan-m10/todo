import React, {useEffect} from 'react';
import './App.css';
import {Card, Col, Row} from "antd";
import {loadBoxs} from "./api/cards";


const App = () => {
    const [list, setList] = React.useState<any[]>([]);


    useEffect(() => {
        loadBoxs().then(res=>{
            setList(res as any[]);
        })
        //无订阅状态的情况下，第一次渲染的时候会执行的
    }, []);

    return (
        <div>

            <Row gutter={[24, 24]}>
                {list && list.map((item) => {
                    return (
                        <Col span={8} key={item.id}>
                            <Card
                                title={item.title}
                                style={{
                                    width: 300,
                                    margin: 'auto'
                                }}>
                                {item.content}
                            </Card>
                        </Col>
                    )
                })}
            </Row>


        </div>
    )

}

export default App;
