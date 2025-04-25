import React, { useEffect, useState } from 'react';

const AccountListPage = () => {
    const [accountList, setAccountList] = useState<{ username: string, password: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Add loading state for UI feedback

    useEffect(() => {

        try {
            const storedAccounts = localStorage.getItem("accounts");
            if (storedAccounts) {

                const parsedAccounts = JSON.parse(storedAccounts);
                if (Array.isArray(parsedAccounts)) {
                    setAccountList(parsedAccounts);
                } else {
                    setAccountList([]);
                }
            } else {
                setAccountList([]);
            }
        } catch (error) {
            console.error("Error parsing localStorage:", error);
            setAccountList([]);
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can show a loading spinner or message here
    }

    return (
        <div>
            <h1>Account List</h1>
            {accountList.length === 0 ? (
                <p>No accounts found</p>
            ) : (
                <ul>
                    {accountList.map((account, index) => (
                        <li key={index}>
                            Username: {account.username} | Password: {account.password}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AccountListPage;
