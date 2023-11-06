import { PageProps } from "@/types";
import React from "react";

export default function Main({ children }: any) {
    return (
        <div className="py-12 h-screen">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
        </div>
    );
}
