import React, { useState, useEffect } from 'react';

export default function Bt5() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const tick = () => {
            setTime(new Date());
        };

        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Real-time Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}
