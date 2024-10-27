'use client'

import UserPage from "@/components/Content/UserPage";
import AuthPage from "@/components/Content/AuthPage";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect } from "react";
import { setToken } from "@/store/tokenSlice";
import { redirect } from "next/navigation";

const MainPage = () => {

  const authState = useAppSelector((state) => Boolean(state.token.token));
  const dispatch = useAppDispatch()

  //if (!authState) redirect("/login")

  useEffect(() => {
    dispatch(setToken(localStorage.getItem('token')));
  }, [])

  return (<>
    {authState ? <UserPage /> : <AuthPage />}
  </>
  );

}

export default MainPage