import {Outlet} from "react-router-dom";
import {FC} from "react";
import {Header} from "../../components/Header/Header.tsx";

const MainLayout: FC = () => {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    );
};

export default MainLayout;