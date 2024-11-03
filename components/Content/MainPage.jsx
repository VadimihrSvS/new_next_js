'use client'

import UserPage from "@/components/Content/UserPage";
import AuthPage from "@/components/Content/AuthPage";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect } from "react";
import { setToken } from "@/store/tokenSlice";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

const MainPage = () => {

  return (<>
    <UserPage />
  </>
  );

}

export default dynamic(() => Promise.resolve(MainPage), {
  ssr: false
})