import {Badge, Button, Calendar, Form, Input, Modal, Spin} from "antd";
import React, {useEffect} from "react";
import {addTask, list, listAll} from "../../api/todo";
import {Dayjs} from "dayjs";
import "./index.css";
import {customHeader} from "./header";

const Index = () => {
    const [todoList, setTodoList] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState<string>('');

    const [modalVisible, setModalVisible] = React.useState(false);
    const [formInstance] = Form.useForm();

    const [todos, setTodos] = React.useState<any[]>([]);

    const handlerTodoList = (date: string) => {
        setLoading(true);
        setTodoList([]);
        list(date)
            .then((res) => {
                setTodoList(res);
            })
            .finally(() => {
                setLoading(false);
            })
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

        if (taskCount > 0) {
            return (
                <div className="events">
                    <Badge
                        count={`${completedCount}/${taskCount}`}
                        style={{backgroundColor: allFinished ? '#52c41a' : '#d11b1b'}}/>
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
                    headerRender={customHeader}
                    onChange={(value) => {
                        const date = value.format('YYYY-MM-DD');
                        setCurrentDate(date);
                        handlerTodoList(date);
                    }}
                    cellRender={dateCellRender}
                />
            </div>

            <Modal
                title={"新增任务"}
                open={modalVisible}
                destroyOnClose={true}
                onCancel={()=>{
                    setModalVisible(false);
                }}
                onOk={()=>{
                    formInstance.submit();
                }}
                okText={"确定"}
                cancelText={"取消"}
            >
                <Form
                    form={formInstance}
                    layout={"vertical"}
                    onFinish={(values)=>{
                        addTask(values).finally(()=>{
                            setModalVisible(false);
                        });
                    }}
                >

                    <Form.Item
                        label="任务时间"
                        name="date"
                        hidden={true}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="任务名称"
                        name="title"
                        rules={[{required: true, message: '请输入任务名称'}]}
                    >
                        <Input placeholder={"请输入任务名称"} />
                    </Form.Item>
                    <Form.Item
                        label="任务描述"
                        name="description"
                    >
                        <Input.TextArea placeholder={"请输入任务描述"} />
                    </Form.Item>
                </Form>

            </Modal>

            <div className="TodoList">
                <div>
                    <span>TodoList</span>
                </div>
                <Spin spinning={loading}/>

                <div>
                    <Button onClick={()=>{
                        formInstance.setFieldsValue({
                            date: currentDate
                        });
                        setModalVisible(true);
                    }}>新增任务</Button>
                </div>

                <div>
                {!loading && todoList.length === 0 && (
                    <p>No tasks for this date.</p>
                )}

                {todoList.length > 0 && (
                    todoList.map(item => (
                        <div key={item.id}>
                            {item.title}
                        </div>
                    ))
                )}
                </div>
            </div>
        </div>
    );
};

export default Index;
