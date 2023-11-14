import Main from "@/Components/Main";
import Authenticated from "@/Layouts/AuthenticatedLayout/Index";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { Button, Card, Tooltip } from "flowbite-react";

export default function Show({ criteria, auth }: { criteria: any; auth: any }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detail Kriteria {criteria.name}
                </h2>
            }
        >
            <Head title="Detail Kriteria" />

            <Main>
                <Card>
                    <div className="w-full flex justify-end">
                        <Tooltip content="Edit">
                            <Button
                                href={route("criteria.edit", {
                                    criterion: criteria.id,
                                })}
                            >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                        </Tooltip>
                    </div>
                    <div className="w-full border-b"></div>
                    <div className="grid grid-cols-2">
                        <p>Nama Kriteria</p>
                        <p className="font-bold">{criteria.name}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Bobot Kriteria</p>
                        <p className="font-bold">
                            {criteria.weight}
                            {"%"}
                        </p>
                    </div>
                </Card>
            </Main>
        </Authenticated>
    );
}
