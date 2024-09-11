import Navbar from "../../../components/Navbar"
import Main from "../../../components/Main";
import ReportsNavbar from "../../../components/Navbars/ReportsNavbar"
import OperationalSummary from "../../../components/Content/ReportContent/OperationalSummary";


const Reports = () => {
    return (
        <>
            <Navbar />
            <Main>
                <OperationalSummary />
            </Main>
        </>
    )
}

export default Reports