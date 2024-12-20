'use client'
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { setToken } from '@/store/tokenSlice';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


function Header() {
  const dispatch = useAppDispatch();

  const exit = () => {
    localStorage.clear();
    const token = localStorage.getItem('token')
    dispatch(setToken(token))
  }
  // const userSelector = useAppSelector(value => value.token.token)
  const token = localStorage.getItem("token")
  var decoded = { firstName: "", surName: "" };
  if (token) {
    decoded = jwtDecode(token)
  }

  // var decoded;
  // useEffect(() => {
  //   decoded = jwtDecode(localStorage.getItem("token")!)
  //   console.log(decoded)
  // }, [])
  // useEffect(() => {
  //   console.log(decoded)
  // }, [])


  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo logo" href="#">
          <div className="logo__image"></div>
          <div className="logo__name">Диспетчерская <br /> группа САВР</div>
        </a>
        <a className="header__date date" href="#">
          <div className="date__weekday"></div>
          <div className="date__year"></div>
          <div className="date__time"></div>
        </a>
        <div className="header__titles titles-header">
          <div className="titles-header__title"><Link href='/MUMG'>Доклады</Link></div>
          <div className="titles-header__title"><Link href='/SPOR'>СПОР</Link></div>
        </div>


        {/* <select name="form[]" className="form" data-show-selected="true">
          <option value="1" selected>Доклады</option>
          <option value="2">СПОР</option>
          <option value="3">Режимы</option>
          <option value="4">Отчёты</option>
          <option value="5">Объекты</option>
          <option value="6">Авария</option>
        </select> */}

        <div className="header__logined logined">
          {/* <img className="logined__avatar" src="avatar.jpg" /> */}
          <div className="logined__info">{decoded.firstName} {decoded.surName}</div>
          <div className="logined__actions">
            <Link onClick={exit} className="logined__icon fa-solid fa-caret-down" href='/login'></Link>
            <div className="logined__popup popup-elements">
              <div className="popup-elements__element">Какая-то строка</div>
              <div className="popup-elements__element">Ещё одна строка</div>
              <div className="popup-elements__br"></div>
              <div className="popup-elements__element">Настройки</div>
              <div className="popup-elements__br"></div>
              <div className="popup-elements__element">Выйти</div>
            </div>
          </div>
        </div>
      </div>
    </header>);
}

export default Header;
