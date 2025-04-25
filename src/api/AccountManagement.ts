let AccountList: { username: string, password: string }[] = [];

export const AccountManagement = (body: any): Promise<any> => {
    console.log('body', body);

    const { Newusername, Newpassword } = body;

    return new Promise<any>(resolve => {
        setTimeout(() => {

            const storedAccounts = localStorage.getItem("accounts");
            const AccountList: { username: string; password: string }[] = storedAccounts
                ? JSON.parse(storedAccounts)
                : [];

            // Check if the username already exists in the AccountList
            const existingAccount = AccountList.find(account => account.username === Newusername);

            if (existingAccount) {
                // Username already exists
                resolve({ success: false, message: "Account creation failed. Username already exists." });
            } else {
                // Add the new account to the AccountList
                AccountList.push({ username: Newusername, password: Newpassword });

                // Store the updated AccountList back into localStorage
                localStorage.setItem("accounts", JSON.stringify(AccountList));

                resolve({
                    success: true,
                    message: "Account created successfully.",
                    token: '123',
                });
            }
        }, 3000);
    });
};
