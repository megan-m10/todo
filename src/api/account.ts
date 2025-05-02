import {account} from "./store";

export const login = (body: any): Promise<any> => {
    console.log('body', body);
    console.log('map', account);

    const { username, password, signin } = body;

    return new Promise<any>(resolve => {
        setTimeout(() => {
            const mapUsername = account.get('username');
            const mapPassword = account.get('password');

            if (
                username && password && (
                    (username === mapUsername && password === mapPassword) ||
                    (username === "megan.mou@westtown.edu" && password === "123")
                )
            )
            {
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


export const register = (body: any): Promise<any> => {
    console.log('body', body);

    const { username, password } = body;

    return new Promise<any>(resolve => {
        setTimeout(() => {
            if(username &&  username.trim().includes('@') && password){
                account.set('username', body.username);
                account.set('password', body.password);
                resolve(true);
            }else {
                resolve(false);
            }
        }, 1000);
    });

}
