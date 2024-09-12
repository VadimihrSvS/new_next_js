import Navbar from "../../../components/Navbar"
import Main from "../../../components/Main";
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