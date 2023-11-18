import Main from "@/Components/Main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, useForm } from "@inertiajs/react";
import {
    Alert,
    Button,
    Modal,
    Pagination,
    Table,
    Tooltip,
} from "flowbite-react";
import moment from "moment";
import { useState } from "react";

export default function List({
    customer_credits,
    auth,
}: {
    customer_credits: any;
    auth: any;
}) {
    const { delete: remove, recentlySuccessful } = useForm();
    const [modalShow, setModalShow] = useState(false);
    const [deletionId, setDeletionId] = useState(0);

    const destroy = (id: number) => {
        remove(route("credit.destroy", id));
        setModalShow(!modalShow);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    List Kredit Nasabah
                </h2>
            }
        >
            <Head title="List Kredit Nasabah" />

            <Main>
                {recentlySuccessful && <Alert color={`success`}>Sukses!</Alert>}
                <Modal
                    show={modalShow}
                    onClose={() => setModalShow(!modalShow)}
                >
                    <Modal.Header>Yakin hapus?</Modal.Header>
                    <Modal.Footer>
                        <Button
                            onClick={() => setModalShow(!modalShow)}
                            pill
                            color="light"
                        >
                            Batal
                        </Button>
                        <Button
                            onClick={() => destroy(deletionId)}
                            pill
                            color="failure"
                        >
                            Ya, Hapus
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="flex justify-center md:justify-end">
                    <Button
                        pill
                        className="my-3"
                        href={`${route("credit.create")}?customer_id=${
                            customer_credits.customer_id
                        }`}
                    >
                        Tambah
                    </Button>
                </div>
                <div className="bg-white overflow-x-auto dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>No.</Table.HeadCell>
                            <Table.HeadCell>Nama Nasabah</Table.HeadCell>
                            <Table.HeadCell>Status Kredit</Table.HeadCell>
                            <Table.HeadCell>Dibuat pada:</Table.HeadCell>
                            <Table.HeadCell>Aksi</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {customer_credits.data.map(
                                (item: any, index: number) => {
                                    console.log(
                                        route("credit.destroy", {
                                            credit: item.id,
                                        })
                                    );

                                    return (
                                        <Table.Row key={index}>
                                            <Table.Cell>{index + 1}</Table.Cell>
                                            <Table.Cell>
                                                {item.customer.user.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.status.name}
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
                                                            "credit.show",
                                                            {
                                                                credit: item.id,
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
                                                        onClick={() => {
                                                            setDeletionId(
                                                                item.id
                                                            );
                                                            setModalShow(
                                                                !modalShow
                                                            );
                                                        }}
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
                {customer_credits.total < 1 ? (
                    <div className="flex justify-center w-full p-5">
                        <Alert>Tidak ada data.</Alert>
                    </div>
                ) : (
                    <div className="flex justify-center md:justify-end my-3">
                        <Pagination
                            layout="table"
                            currentPage={customer_credits.current_page}
                            totalPages={customer_credits.total}
                            onPageChange={(e) => console.log(e)}
                        />
                    </div>
                )}
            </Main>
        </AuthenticatedLayout>
    );
}
