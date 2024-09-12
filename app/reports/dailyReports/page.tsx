import Navbar from "../../../components/Navbar"
import Main from "../../../components/Main";
import DailyReport from "../../../components/Content/ReportContent/DailyReport";


const Reports = () => {
    return (
        <>
            <Navbar />
            <Main>
                <DailyReport />
            </Main>
        </>
    )
}

export default Reports