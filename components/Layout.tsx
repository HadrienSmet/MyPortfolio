import { ReactNode } from "react";
// import type { NextPage } from "next";
// import { useWindowSize } from "../utils/hooks";
import CursorContext from "./CursorContext";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    // const screenWidth = typeof window !== 'undefined' ? useWindowSize().width : undefined;
    return (
        <>
            <CursorContext>
                <Header />
                <main>{children}</main>
                <Navigation />
                <Footer />
            </CursorContext>
        </>
    );
};

export default Layout;
