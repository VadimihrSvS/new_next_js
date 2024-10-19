'use client'

import ReduxProvider from "@/store/redux-provider";
import MainPage from "@/components/Content/MainPage";

const RootPage = () => {

  return (
    <ReduxProvider>
      <MainPage />
    </ReduxProvider>
  );

}

export default RootPage