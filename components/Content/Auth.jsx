'use client'

import React, { useState } from 'react';
import { useAppSelector } from "@/lib/store";
// import { useDispatch, useSelector, useStore } from 'react-redux'
// import { setToken, setUser } from './IsAuthSlice';
// import { redirect, useNavigate } from 'react-router-dom';
// import { login, registration } from '../http/userAPI';
// import { jwtDecode } from 'jwt-decode';
import './auth.css'
import dynamic from 'next/dynamic';



const Auth = () => {

    // const dispatch = useDispatch()
    // const isAuth = useSelector(value => value.token.value)
    // const navigate = useNavigate();
    // React.useEffect(() => {
    //     if (isAuth !== '') {
    //         console.log(isAuth)
    //         navigate('/');
    //     }
    // }, []);
    const authState = useAppSelector((state) => state.auth.authState);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const [surname, setSurname] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [group, setGroup] = useState("SAVR");
    const [regPassword, setRegPassword] = useState("");
    const [regConfPassword, setRegConfPassword] = useState("");

    // const checkUser = async (auth) => {
    //     try {
    //         if (auth) {
    //             const token = await login(userName, password)
    //             if (token.status === 200) {
    //                 const decoded = jwtDecode(token.data.token)
    //                 dispatch(setToken(token.data.token));
    //                 dispatch(setUser({ username: decoded.name, role: decoded.role, first_name: decoded.first_name, last_name: decoded.last_name }))
    //                 navigate('/reports')
    //             }
    //         } else {
    //             const token = await registration(surname, regPassword, regConfPassword, first_name, last_name, group)
    //             if (token.status === 200) {
    //                 setErrMessage("Запрос отправлен");
    //             }
    //         }
    //     } catch (e) {
    //         console.log(e)
    //         setErrMessage(e.response.data.message)
    //     }
    // }

    return (<div className='authpage'>
        <div className="inputcontainer">
             <div className="inputcontainer__logo">ДГ САВР {authState.toString()}</div>
           <div className="inputcontainer__authreg">
                <a className="authtext _chosen" href="#" onClick={(event) => {
                    document.getElementsByClassName(event.target.className)[0].classList.add("_chosen")
                    document.getElementsByClassName("inputcontainer__registr")[0].classList.add("_ishidden")
                    document.getElementsByClassName("inputcontainer__auth")[0].classList.remove("_ishidden")
                    document.getElementsByClassName("regtext")[0].classList.remove("_chosen");

                }}>Авторизация</a>
                <a className="regtext" href="#" onClick={(event) => {
                    document.getElementsByClassName(event.target.className)[0].classList.add("_chosen");
                    document.getElementsByClassName("inputcontainer__registr")[0].classList.remove("_ishidden");
                    document.getElementsByClassName("inputcontainer__auth")[0].classList.add("_ishidden");
                    document.getElementsByClassName("authtext")[0].classList.remove("_chosen");
                }}>Регистрация</a>
            </div>
            <div>
                <div className="inputcontainer__auth">
                    <input className="authtext__input input__auth" type="text" name="login" autoComplete="off" placeholder="Фамилия" value={userName} onChange={(event) => setUserName(event.target.value)} />
                    <input className="authtext__input input__auth" type="password" name="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button className="authtext__confirmbutton" onClick={() => {
                        checkUser(true)
                    }}>Войти</button>
                    <div>{errMessage}</div>
                </div>
                <div className="inputcontainer__registr _ishidden">
                    <input className="authtext__input input__auth" value={surname} onChange={(event) => setSurname(event.target.value)} type="text" name="login" autoComplete="off" placeholder="Фамилия" />
                    <input className="authtext__input input__auth" value={first_name} onChange={(event) => setFirstName(event.target.value)} type="text" name="login" autoComplete="off" placeholder="Имя" />
                    <input className="authtext__input input__auth" value={last_name} onChange={(event) => setLastName(event.target.value)} type="text" name="login" autoComplete="off" placeholder="Отчество" />
                    <select className="authtext__input input__auth" value={group} onChange={(event) => setGroup(event.target.value)}>
                        <option value="САВР">САВР</option>
                        <option value="Минтеплосети">Минтеплосети</option>
                        <option value="Минское УМГ">Минское УМГ</option>
                    </select>
                    <input className="authtext__input input__auth" value={regPassword} onChange={(event) => setRegPassword(event.target.value)} type="password" name="password" placeholder="Пароль" />
                    <input className="authtext__input input__auth" value={regConfPassword} onChange={(event) => setRegConfPassword(event.target.value)} type="password" name="password_confirm" placeholder="Потдвердить пароль" />
                    <button className="authtext__confirmbutton" onClick={() => {
                        checkUser(false)
                    }} >Запросить регистрацию</button>
                    <div>{errMessage}</div>

                </div>

            </div>


        </div>
    </div >)
}

export default dynamic(() => Promise.resolve(Auth), {
    ssr: false
})