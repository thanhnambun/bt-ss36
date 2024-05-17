import React from 'react'
import { useEffect, useState } from "react";

export default function Bt2() {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        document.title = count.toString();
    }, [count]);

    // const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value);
    // };
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            Bt2 <br />

            <h1>Change Document Title</h1>
            <input
                type="text"
                value={count}
                placeholder="Enter new title"
            />
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
