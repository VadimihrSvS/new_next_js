'use client'
import { useState } from 'react';

export default function MUMGHour() {

    const [name, setUser] = useState("");
    const doIt = async () => {
        const res = await fetch('/api/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        })
        console.log(res)
    }
    return (
        <div>
            <h1>Ежедневный доклад</h1>
            <input value={name} onChange={(e) => setUser(e.target.value)} />
            <button type='submit' onClick={doIt}>Добавить</button>
        </div >

    );
};
