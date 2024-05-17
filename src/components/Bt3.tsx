import React, { useState } from 'react'

type Tab = {
    id: number;
    title: string
}

export default function Bt3() {
    const tabs: Tab[] = [
        {
            id: 1,
            title: "Trang chủ"
        },
        {
            id: 2,
            title: "Sản phẩm"
        },
        {
            id: 3,
            title: "Giới thiệu"
        },
        {
            id: 4,
            title: "Liên hệ"
        },
    ]
    const [active, setActive] = useState<number>(1)
    console.log(active);


    // Hàm thay đổi button được active
    const handleChangeActive = (id: number) => {
        // Cập nhật lại State
        setActive(id)
    }
    return (
        <div>
            <nav>
                {
                    tabs.map((tab: Tab) => (
                        <button onClick={() => handleChangeActive(tab.id)} className={`${tab.id === active ? "active" : ""}`}>{tab.title}</button>
                    ))
                }
            </nav>
        </div>
    )
}
