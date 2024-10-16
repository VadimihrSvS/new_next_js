import Navbar from "../../components/Navbar"
import Main from "../../components/Main";
import CurrentWorks from "../../components/Content/SPORContent/CurrentWorks";
import { redirect } from "next/navigation"

const SPOR = () => {
    //redirect('/login')

    return (
        <>
            <Navbar />
            <Main>
                <CurrentWorks />
            </Main>
        </>
    )
}

export default SPOR