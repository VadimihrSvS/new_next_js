'use client'

import UserPage from "@/components/Content/UserPage";
import AuthPage from "@/components/Content/AuthPage";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect } from "react";
import { setAuthState } from "@/store/authSlice";

const MainPage = () => {

  const authState = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAuthState(Boolean(localStorage.getItem('token'))));
  }, [])

  return (<>
    {authState ? <UserPage /> : <AuthPage />}
  </>
  );

}

export default MainPage