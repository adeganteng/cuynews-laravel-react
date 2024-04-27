import React from "react";
import Navbar from "@/Components/Homepage/Navbar";

import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Editnews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };

        router.post("/news/update", data);
    };
    // console.log("props: ", props);
    return (
        <div className="min-h-screen bg-slate-200">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="py-12 pt-20">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b">
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input input-bordered w-full bg-white m-2"
                            onChange={(title) => setTitle(title.target.value)}
                            defaultValue={props.myNews.title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="input input-bordered w-full bg-white m-2"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            defaultValue={props.myNews.description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="input input-bordered w-full bg-white m-2"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            defaultValue={props.myNews.category}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary text-white m-2"
                            onClick={() => handleSubmit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
