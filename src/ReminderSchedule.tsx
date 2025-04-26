import {Calendar} from "antd";
import React from "react";
import {list} from "./api/todo";

const ReminderSchedule = () => {

    const [todoList, setTodoList] = React.useState<any[]>([]);

    const handlerTodoList = (date:string)=>{
        list(date).then((res)=>{
            setTodoList(res);
        });
    }

    return (
        <div>
            <Calendar
                onChange={(value)=>{
                    const date = value.format('YYYY-MM-DD');
                    handlerTodoList(date);
                }}
            />

            <div>
                <div>
                    <span>TodoList</span>
                    {todoList && todoList.map(item=>{
                        return (
                            <div key={item.id}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}

export default ReminderSchedule;
