import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React, { useEffect } from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import axios from "axios";

export default function Categories(props) {
    useEffect(() => {
        console.log("get cat d");
        /*const a = Inertia.get("/categories/list").then((res) => {
            console.log(res);
        });*/

        axios.get("/categories/list").then((res) => console.log(res));
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
