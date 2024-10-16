import Main from "../../components/Main";
import { redirect } from "next/navigation"
import MUMGHour from "../../components/Content/ReportContent/MUMGHour";

const Reports = () => {
    //redirect('/login')

    return (
        <>
            <Main>
                <MUMGHour />
            </Main>
        </>
    )
}

export default Reports