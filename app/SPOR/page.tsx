import Navbar from "../../components/Navbar"
import Main from "../../components/Main";
import SPORNavbar from "../../components/Navbars/SPORNavbar"
import CurrentWorks from "../../components/Content/SPORContent/CurrentWorks";


const SPOR = () => {
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