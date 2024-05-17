import React from 'react'
import { useRef, useEffect} from "react";

export default function Bt4() {
    const forcusinput = useRef<HTMLInputElement>(null)
    useEffect(() => {
        forcusinput.current?.focus()

    })
    return (
        <div>Bt4
            <input ref={forcusinput} type="text" /><br />
        </div>
    )
}
