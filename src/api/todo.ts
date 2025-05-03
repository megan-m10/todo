import {todoList} from "./store";

export const list = (date: string): Promise<any> => {
    console.log('date', date);

    return new Promise<any>(resolve => {
        setTimeout(() => {
            resolve(todoList.filter(item=>{
                if(item.date === date){
                    return true;
                }
                return false;
            }))
        }, 1000);
    });
};


export const listAll = (): Promise<any> => {
    return new Promise<any>(resolve => {
        setTimeout(() => {
            resolve(todoList);
        }, 1000);
    });
};


export const addTask = (body: any): Promise<any> => {
    console.log('body', body);

    return new Promise<any>(resolve => {
        todoList.push(body);
        resolve(true);
    });
}
