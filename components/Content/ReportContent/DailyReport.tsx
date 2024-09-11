'use client'

import Link from 'next/link';
import { useState } from 'react';


export default function DailyReport() {

    const [name, setUser] = useState("");

    const doIt = async () => {
        const res = await fetch('api/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        })

        // const data = await res.json()
        // console.log(data)

        console.log(res)
    }



    return (
        <div>
            <h1>Ежедневный доклад</h1>
            <input value={name} onChange={(e) => setUser(e.target.value)} />
            <button type='submit' onClick={doIt}>123</button>
        </div >

    );
};
