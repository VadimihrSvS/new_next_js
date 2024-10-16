'use client'

import Main from "../components/Main";
import ReduxProvider from "@/store/redux-provider";
import AuthUpdater from "@/components/auth-updater";
import AuthViewer from "@/components/auth-viewer";

const Reports = () => {

  // return (
  //   <>
  //     <Main>
  //       <DailyReport />
  //     </Main>
  //   </>
  // )

  return (
    <ReduxProvider>
      <Main>
        <AuthUpdater />
        <AuthViewer />
      </Main>
    </ReduxProvider>
  );

}

export default Reports