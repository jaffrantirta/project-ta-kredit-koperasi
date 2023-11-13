import Main from "@/Components/Main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, useForm } from "@inertiajs/react";
import {
    Alert,
    Button,
    Pagination,
    Table,
    Toast,
    Tooltip,
} from "flowbite-react";
import moment from "moment";

export default function List({ credits, auth }: { credits: any; auth: any }) {
    const { delete: remove, recentlySuccessful } = useForm();

    const destroy = (id: number) => {
        remove(route("customer.destroy", id));
    };

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
                {recentlySuccessful && (
                    <Toast>
                        <div>Sukses!</div>
                        <Toast.Toggle />
                    </Toast>
                )}
                <div className="flex justify-center md:justify-end">
                    <Button
                        pill
                        className="my-3"
                        href={route("customer.create")}
                    >
                        Tambah
                    </Button>
                </div>
                <div className="bg-white overflow-x-auto dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>No.</Table.HeadCell>
                            <Table.HeadCell>Nama</Table.HeadCell>
                            <Table.HeadCell>Jenis Kelamin</Table.HeadCell>
                            <Table.HeadCell>Terdaftar pada:</Table.HeadCell>
                            <Table.HeadCell>Aksi</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {credits.data.map(
                                (
                                    item: {
                                        id: number;
                                        user: { name: string };
                                        gender: string;
                                        created_at: string;
                                    },
                                    index: number
                                ) => {
                                    console.log(
                                        route("customer.destroy", {
                                            customer: item.id,
                                        })
                                    );

                                    return (
                                        <Table.Row key={index}>
                                            <Table.Cell>{index + 1}</Table.Cell>
                                            <Table.Cell>
                                                {item.user.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.gender}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {moment(item.created_at).format(
                                                    "LLL"
                                                )}
                                            </Table.Cell>
                                            <Table.Cell className="flex gap-3">
                                                <Tooltip content="Edit">
                                                    <Button
                                                        pill
                                                        href={route(
                                                            "customer.show",
                                                            {
                                                                customer:
                                                                    item.id,
                                                                include: [
                                                                    "user",
                                                                ],
                                                            }
                                                        )}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPencil}
                                                        />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip content="Hapus">
                                                    <Button
                                                        onClick={() =>
                                                            destroy(item.id)
                                                        }
                                                        pill
                                                        color="red"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                        />
                                                    </Button>
                                                </Tooltip>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                }
                            )}
                        </Table.Body>
                    </Table>
                </div>
                {credits.total < 1 ? (
                    <div className="flex justify-center w-full p-5">
                        <Alert>Tidak ada data.</Alert>
                    </div>
                ) : (
                    <div className="flex justify-center md:justify-end my-3">
                        <Pagination
                            layout="table"
                            currentPage={credits.current_page}
                            totalPages={credits.total}
                            onPageChange={(e) => console.log(e)}
                        />
                    </div>
                )}
            </Main>
        </AuthenticatedLayout>
    );
}
