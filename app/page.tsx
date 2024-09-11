
import Navbar from "../components/Navbar"
import Main from "../components/Main";
import ReportsNavbar from "../components/Navbars/ReportsNavbar"
import DailyReport from "../components/Content/ReportContent/DailyReport";
import SPORNavbar from "@/components/Navbars/SPORNavbar";


const Reports = () => {
  return (
    <>
      <Main>
        <DailyReport />
      </Main>
    </>
  )
}

export default Reports