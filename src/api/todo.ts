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
