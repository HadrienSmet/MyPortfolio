import { ReactNode } from "react";
import CursorContext from "./CursorContext";
import Header from "./Header";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <CursorContext>
                <Header />
                <main>{children}</main>
            </CursorContext>
        </>
    );
};

export default Layout;
