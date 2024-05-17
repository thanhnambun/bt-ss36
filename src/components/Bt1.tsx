import React from 'react'
import { useEffect, useState } from "react";

export default function Bt1() {
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        document.title = title;
    }, [title]);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    return (
        <div>
            Bt1 <br />

            <h1>Change Document Title</h1>
            <input
                type="text"
                value={title}
                onChange={handleChangeTitle}
                placeholder="Enter new title"
            />
        </div>
    )
}
