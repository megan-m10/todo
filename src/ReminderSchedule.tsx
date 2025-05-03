import {Badge, Calendar, Col, Radio, Row, Select, Typography} from "antd";
import React, {useEffect} from "react";
import {list, listAll} from "./api/todo";
import {Dayjs} from "dayjs";
import "./ReminderSchedule.css";

const ReminderSchedule = () => {
    const [todoList, setTodoList] = React.useState<any[]>([]);
    const [todos, setTodos] = React.useState<any[]>([]);

    const handlerTodoList = (date: string) => {
        list(date).then((res) => {
            setTodoList(res);
        });
    };

    const handlerTodoAll = () => {
        listAll().then((res) => {
            setTodos(res);
        });
    };

    const dateCellRender = (value: Dayjs) => {
        const date = value.format('YYYY-MM-DD');
        const tasks = todos.filter(item => item.date === date);

        const taskCount = tasks.length;
        const completedCount = tasks.filter(item => item.completed).length;
        const allFinished = taskCount === completedCount;

        if(taskCount>0){
            return (
                <div className="events">
                    <Badge
                        count={`${completedCount}/${taskCount}`}
                        style={{ backgroundColor: allFinished?'#52c41a':'#d11b1b' }} />
                </div>
            )
        }
        return null;
    };

    // 这是一个钩子函数，[] 关注的数据变化
    useEffect(() => {
        handlerTodoAll();
    }, []);

    return (
        <div className="ReminderSchedule">
            <div className="Calendar">
                <Calendar
                    mode={"month"}
                    headerRender={({ value, type, onChange, onTypeChange }) => {
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
                            <div style={{ padding: 8 }}>
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
                    }}
                    onChange={(value) => {
                        const date = value.format('YYYY-MM-DD');
                        handlerTodoList(date);
                    }}
                    cellRender={dateCellRender}
                />
            </div>

            <div className="TodoList">
                <span>TodoList</span>
                {todoList.length === 0 ? (
                    <p>No tasks for this date.</p>
                ) : (
                    todoList.map(item => (
                        <div key={item.id}>
                            {item.title}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ReminderSchedule;
