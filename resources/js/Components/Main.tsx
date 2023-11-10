import { PageProps } from "@/types";
import { Footer } from "flowbite-react";
import React from "react";

export default function Main({ children }: any) {
    return (
        <div className="py-12 min-h-screen">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
            <div className="p-3">
                <Footer className="p-3">
                    <Footer.Brand src="https://stmikbandungbali.ac.id/wp-content/uploads/2021/10/Logo-STMIK-BANDUNG-BALI.png" />
                    <Footer.Copyright by="ANAK AGUNG ISTRI DINA PRABAWATI" />
                </Footer>
            </div>
        </div>
    );
}
