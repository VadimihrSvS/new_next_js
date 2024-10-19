'use client'

import UserPage from "@/components/Content/UserPage";
import AuthPage from "@/components/Content/AuthPage";
import { useAppSelector } from "@/lib/store";

const MainPage = () => {

  var isAuthorized = false;
  const authState = useAppSelector((state) => state.auth.authState);

  return (<>
    {authState ? <UserPage /> : <AuthPage />}
  </>
  );

}

export default MainPage