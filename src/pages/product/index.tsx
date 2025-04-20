import React, {useEffect} from "react";
import {Col, Input, Row} from "antd";
import {list} from "../../api/product";

const ProductPage = () => {

    const [productList, setProductList] = React.useState<any[]>([]);

    const [query, setQuery] = React.useState('');

    useEffect(() => {
        list(query)
            .then(res => {
                setProductList(res);
            })
    }, []);

    useEffect(() => {
        list(query)
            .then(res => {
                setProductList(res);
            })
    }, [query]);

    return (
        <>
            <Input.Search
                placeholder={"iphone12"}
                style={{
                    marginBottom: 10
                }}
                onSearch={(value)=>{
                    setProductList([]);
                    setQuery(value);
                }}
            />
            <Row
                gutter={[24, 24]}
            >
                {productList.map((item) => {
                    return (
                        <Col span={12}>
                            <div>
                                <img src={item.img} style={{
                                    width: 100,
                                    height: 100
                                }}/>
                                <div>
                                    <div>{item.name}</div>
                                    <div>{item.desc}</div>
                                    <div>价格：{item.price}</div>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}

export default ProductPage;
