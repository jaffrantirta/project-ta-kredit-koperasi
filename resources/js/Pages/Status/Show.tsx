import Devider from "@/Components/Devider";
import Main from "@/Components/Main";
import Authenticated from "@/Layouts/AuthenticatedLayout/Index";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { Button, Card, Tooltip } from "flowbite-react";

export default function Show({ status, auth }: { status: any; auth: any }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detail Status {status.name}
                </h2>
            }
        >
            <Head title="Detail Status" />

            <Main>
                <Card>
                    <div className="w-full flex justify-end">
                        <Tooltip content="Edit">
                            <Button
                                href={route("status.edit", {
                                    status: status.id,
                                })}
                            >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                        </Tooltip>
                    </div>
                    <Devider />
                    <div className="grid grid-cols-2">
                        <p>Nama Status</p>
                        <p className="font-bold">{status.name}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Minimum Nilai Untuk Lolos Status Ini</p>
                        <p className="font-bold">{status.minimum_value}</p>
                    </div>
                </Card>
            </Main>
        </Authenticated>
    );
}
