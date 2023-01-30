import { Head } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import axios from "axios";

interface ITransaction {
    id: number;
    categoryId: number;
    accountId: number;
    amount: number;
    type: number;
    comment: string;
    createdAt: string;
    date: string;
}

interface ICategory {
    id: number;
    name: string;
}

interface IAccount {
    id: number;
    name: string;
}

export default function Transactions(props) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);

    const getAllData = async () => {
        setIsLoading(true);

        const dictCategories = await axios.get("/categories/list");
        const dictAccounts = await axios.get("/accounts/list");

        console.log(dictAccounts, dictCategories);

        setCategories(dictCategories.data.data);
        setAccounts(dictAccounts.data.data);

        axios
            .get("/transactions/list")
            .then((res) => {
                setTransactions(res.data.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getAllData();
    }, []);

    const addTransaction = () => {
        // TODO
        setIsAdding(true);
        axios
            .post("/transactions/store", {})
            .then((res) => {
                setTransactions(res.data.data);
            })
            .finally(() => {
                setIsAdding(false);
            });
    };

    const getAccount = (accountId: number) => {
        return accounts.find((account) => account.id === accountId);
    };

    const getCategory = (categoryId: number) => {
        return categories.find((category) => category.id === categoryId);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Categories
                </h2>
            }
        >
            <Head title="Transactions" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Transactions</div>

                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            <div>
                                {transactions.map((transaction) => {
                                    return (
                                        <div key={transaction.id}>
                                            {transaction.amount},{" "}
                                            {
                                                getCategory(
                                                    transaction.categoryId
                                                )?.name
                                            }
                                            ,{" "}
                                            {
                                                getAccount(
                                                    transaction.accountId
                                                )?.name
                                            }
                                            <br />
                                            {transaction.date},{" "}
                                            {transaction.comment}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/*<h3>Add New Category</h3>

                        <input
                            type={"text"}
                            value={name}
                            disabled={isAdding}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />

                        <button
                            type={"button"}
                            onClick={addCategory}
                            disabled={isAdding}
                        >
                            Add
                        </button>*/}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
