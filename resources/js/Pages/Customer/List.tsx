import Main from "@/Components/Main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head } from "@inertiajs/react";
import { Button, Table } from "flowbite-react";

export default function List({
    customers,
    auth,
}: {
    customers: any;
    auth: any;
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    List Nasabah
                </h2>
            }
        >
            <Head title="List Nasabah" />

            <Main>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>No.</Table.HeadCell>
                            <Table.HeadCell>Nama</Table.HeadCell>
                            <Table.HeadCell>Aksi</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {customers.data.map(
                                (
                                    item: { user: { name: string } },
                                    index: number
                                ) => {
                                    return (
                                        <Table.Row>
                                            <Table.Cell>{index + 1}</Table.Cell>
                                            <Table.Cell>
                                                {item.user.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Button pill>Tampilkan</Button>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                }
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </Main>
        </AuthenticatedLayout>
    );
}
