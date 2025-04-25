export const login = (body: any): Promise<any> => {
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

export default login;
//
// return new Promise<any>((resolve) => {
//     setTimeout(() => {
//         // Safely retrieve AccountList from localStorage (default to empty array if not found)
//         const AccountList: { username: string; password: string }[] =
//             JSON.parse(localStorage.getItem("accounts") || "[]");
//
//         // Check if the username exists in the AccountList and if the password matches
//         const account = AccountList.find((account) => account.username === username);
//
//         if (account && account.password === password) {
//             // Login successful
//             const res = {
//                 success: true,
//                 token: '123',  // Example token, could be dynamically generated in real use
//                 staySignin: signin,
//             };
//             resolve(res);
//         } else {
//             // Login failed
//             resolve({ success: false, message: "Invalid username or password." });
//         }
//     }, 1000); // Simulate network delay
// });
// };
