
export const loadBoxs = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const list = [];
            for(let i = 0; i < 10; i++){
                list.push({
                    id: i,
                    title: `Card ${i}`,
                    content: `Content ${i}`
                })
            }
            resolve(list);

        },1000)
    });

}
