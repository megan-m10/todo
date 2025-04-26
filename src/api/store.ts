// 数据结构 key value
export const account = new Map<string,string>();

account.set('username', 'admin@123.com');
account.set('password', '123456');


export const todoList = [
    {
        id:1,
        title: 'Task 1',
        description: 'Description for Task 1',
        completed: false,
        startTime: '2023-10-01 09:00',
        endTime: '2023-10-01 10:00',
        date: '2025-04-01',
        username: 'admin@123.com'
    },
    {
        id:2,
        title: 'Task 2',
        description: 'Description for Task 2',
        completed: false,
        startTime: '2023-10-01 09:00',
        endTime: '2023-10-01 10:00',
        date: '2025-04-01',
        username: 'admin@123.com'
    },
];
