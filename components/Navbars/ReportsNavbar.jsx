import React from 'react';
import Link from 'next/link';

export default function ReportsNavbar() {
    return (
        <ul>
            <Link href="/reports/operationalSummary">
                <div className="navbar__block" href="#">
                    <i className="navbar__icon fa-regular fa-clipboard">
                    </i>
                    <div className="navbar__title">Оперативная сводка</div>
                </div>
            </Link>
            <Link href="/reports/dailyReports">
                <div className="navbar__block" href="#">
                    <i className="navbar__icon fa-solid fa-pencil">
                    </i>
                    <div className="navbar__title">Ежедневный доклад ГИ</div>
                </div>
            </Link>

            <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-calendar-days"></i>
                <div className="navbar__title">Доклад ПНД</div>
            </a>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-solid fa-pencil"></i>
                <div className="navbar__title">Доклад ПТН</div>
            </a>
        </ul>
    );
};

