import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Navbar from "./Navbar";
import SidebarPartial from "./SidebarPartial";
import { menus } from "./Menus";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar menus={menus} user={user} />
            <div className="flex relative">
                <SidebarPartial menus={menus} />
                <div className="w-full">
                    <div className="w-full">
                        {header && (
                            <header className="bg-white dark:bg-gray-800 shadow rounded-3xl m-5">
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    {header}
                                </div>
                            </header>
                        )}

                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}
