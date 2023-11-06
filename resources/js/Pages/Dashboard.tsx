import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Main from "@/Components/Main";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <Main>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        You're logged in!
                    </div>
                </div>
            </Main>
        </AuthenticatedLayout>
    );
}
