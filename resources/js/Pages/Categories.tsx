import { Head } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import axios from "axios";

interface ICategory {
    id: number;
    name: string;
}

export default function Categories(props) {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios
            .get("/categories/list")
            .then((res) => {
                setCategories(res.data.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

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
            <Head title="Categories" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Categories</div>

                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            <div>
                                {categories.map((category) => {
                                    return (
                                        <div key={category.id}>
                                            {category.name}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
