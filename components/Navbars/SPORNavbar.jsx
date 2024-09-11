import React from 'react';

export default function SPORNavbar() {
    return (
        <ul>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-clipboard"></i>
                <div className="navbar__title">Оперативная сводка</div>
            </a>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-calendar-days"></i>
                <div className="navbar__title">Доклад ПНД</div>
            </a>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-solid fa-pencil"></i>
                <div className="navbar__title">Доклад ПТН</div>
            </a>
        </ul>
    );
};