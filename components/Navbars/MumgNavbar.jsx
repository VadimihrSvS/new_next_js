import React from 'react';
import Link from 'next/link';

export default function MUMGNavbar() {
    return (
        <ul>
            <Link href="/MUMG/hour">
                <div className="navbar__block" href="#">
                    <i className="navbar__icon fa-regular fa-clipboard">
                    </i>
                    <div className="navbar__title">Часовые</div>
                </div>
            </Link>
            <Link href="/MUMG/day">
                <div className="navbar__block" href="#">
                    <i className="navbar__icon fa-solid fa-pencil">
                    </i>
                    <div className="navbar__title">Суточные</div>
                </div>
            </Link>

            {/* <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-calendar-days"></i>
                <div className="navbar__title">Доклад ПНД</div>
            </a>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-solid fa-pencil"></i>
                <div className="navbar__title">Доклад ПТН</div>
            </a> */}
        </ul>
    );
};

