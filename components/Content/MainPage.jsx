'use client'

import UserPage from "@/components/Content/UserPage";
import AuthPage from "@/components/Content/AuthPage";
import { useAppSelector } from "@/lib/store";

const MainPage = () => {

  const authState = useAppSelector((state) => state.auth.authState);

  return (<>
    {authState ? <UserPage /> : <AuthPage />}
  </>
  );

}

export default MainPage