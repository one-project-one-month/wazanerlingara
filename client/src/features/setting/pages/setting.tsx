import { Outlet } from "react-router-dom"
import SettingSideBar from "../components/setting-sidebar"


const Setting = () => {
    return (
        <section>
            <aside>
                <SettingSideBar />
            </aside>
            <Outlet />
        </section>
    )
}

export default Setting