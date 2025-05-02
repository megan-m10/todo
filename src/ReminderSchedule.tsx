import { Badge, Calendar } from "antd";
import React from "react";
import { list } from "./api/todo";
import dayjs, { Dayjs } from "dayjs";
import "./ReminderSchedule.css";

const ReminderSchedule = () => {
    const [todoList, setTodoList] = React.useState<any[]>([]);

    const handlerTodoList = (date: string) => {
        list(date).then((res) => {
            setTodoList(res);
        });
    };

    const dateCellRender = (value: Dayjs) => {
        const date = value.format('YYYY-MM-DD');
        const tasks = todoList.filter(item => item.date === date);

        return (
            <ul className="events">
                {tasks.map((item) => (
                    <li key={item.id}>
                        <Badge status="processing" text={item.title} />
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="ReminderSchedule">
            <div className="Calendar">
                <Calendar
                    onChange={(value) => {
                        const date = value.format('YYYY-MM-DD');
                        handlerTodoList(date);
                    }}
                    dateCellRender={dateCellRender}
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
