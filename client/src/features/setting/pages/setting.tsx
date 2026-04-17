import { Outlet, useLocation } from "react-router-dom";
import SettingSideBar from "../components/setting-sidebar";


const Setting = () => {
    const path = useLocation().pathname;
    console.log(path)
    return (
        <section className="flex md:gap-14 ">
            <aside className={`${path !== "/setting" && "hidden md:block"} w-full md:max-w-sm   h-[95vh] md:border-r border-white px-4 md:px-6  relative `}>
                <SettingSideBar />
            </aside>
            <div className="flex-1 ">
                <Outlet />
            </div>
        </section>
    )
}

export default Setting