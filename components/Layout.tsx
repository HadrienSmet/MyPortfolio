import { ReactNode } from "react";
import CursorContext from "./CursorContext";
import Header from "./Header";
import Navigation from "./Navigation";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <CursorContext>
                <Header />
                <main>{children}</main>
                <Navigation />
            </CursorContext>
        </>
    );
};

export default Layout;
