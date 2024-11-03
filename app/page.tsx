'use client'

import ReduxProvider from "@/store/redux-provider";
import MainPage from "@/components/Content/MainPage";
import { redirect } from "next/navigation";

const RootPage = () => {



  return (
    <ReduxProvider>
      <MainPage />
    </ReduxProvider>
  );

}

export default RootPage