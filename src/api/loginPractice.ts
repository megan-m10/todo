export const loginPractice = (body: any): Promise<any> => {
    console.log('body', body);

    const { username, password, signin } = body;

    return new Promise<any>(resolve => {
        setTimeout(() => {
            if (username.trim().includes('@') && password === '123') {
                const res = {
                    success: true,
                    token: '123',
                    staySignin: signin
                };
                resolve(res);
            } else {
                resolve({ success: false });
            }
        }, 1000);
    });
};
