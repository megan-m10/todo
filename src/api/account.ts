export const login = (body: any): Promise<any> => {
    console.log('body', body);
    // Promise 异步操作 ｜ 多线程
    return new Promise<any>(resolve => {
        setTimeout(() => {
            const res = {
                success: true,
                token: '123'
            };
            resolve(res);
        }, 1000);
    });
}
