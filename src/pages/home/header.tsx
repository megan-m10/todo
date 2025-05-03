import {Col, Row, Select, Typography} from "antd";
import React from "react";

export const customHeader = (config:any) => {

    const {value, type, onChange, onTypeChange} = config;

    const start = 0;
    const end = 12;
    const monthOptions = [];

    let current = value.clone();
    //@ts-ignore
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
        current = current.month(i);
        months.push(localeData.monthsShort(current));
    }

    for (let i = start; i < end; i++) {
        monthOptions.push(
            <Select.Option key={i} value={i} className="month-item">
                {months[i]}
            </Select.Option>,
        );
    }

    const year = value.year();
    const month = value.month();
    const options = [];
    for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
            <Select.Option key={i} value={i} className="year-item">
                {i}
            </Select.Option>,
        );
    }
    return (
        <div style={{padding: 8}}>
            <Typography.Title level={4}>Custom header</Typography.Title>
            <Row gutter={8}>
                <Col>
                    <Select
                        size="small"
                        popupMatchSelectWidth={false}
                        className="my-year-select"
                        value={year}
                        onChange={(newYear) => {
                            const now = value.clone().year(newYear);
                            onChange(now);
                        }}
                    >
                        {options}
                    </Select>
                </Col>
                <Col>
                    <Select
                        size="small"
                        popupMatchSelectWidth={false}
                        value={month}
                        onChange={(newMonth) => {
                            const now = value.clone().month(newMonth);
                            onChange(now);
                        }}
                    >
                        {monthOptions}
                    </Select>
                </Col>
            </Row>
        </div>
    );
};
