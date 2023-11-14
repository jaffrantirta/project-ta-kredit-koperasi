import Main from "@/Components/Main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
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
import { useState } from "react";

export default function List({
    criterias,
    auth,
}: {
    criterias: any;
    auth: any;
}) {
    const { delete: remove, recentlySuccessful } = useForm();
    const [modalShow, setModalShow] = useState(false);
    const [deletionId, setDeletionId] = useState(0);

    const destroy = (id: number) => {
        remove(route("criteria.destroy", { criterion: id }));
        setModalShow(!modalShow);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    List Kriteria
                </h2>
            }
        >
            <Head title="List Kriteria" />

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
                <div className="flex justify-center md:justify-between items-center">
                    <div>
                        <p
                            className={`${
                                criterias.data[0]?.weight_summary !== "100.0" &&
                                "text-red-400"
                            }`}
                        >
                            Persentase total bobot:{" "}
                            {criterias.data[0]?.weight_summary || 0}%
                        </p>
                        {criterias.data[0]?.weight_summary !== "100.0" && (
                            <p className="text-red-600 text-xs italic">
                                Atur persentase bobot hinggal 100.0%
                            </p>
                        )}
                    </div>
                    <Button
                        pill
                        className="my-3"
                        href={route("criteria.create")}
                    >
                        Tambah
                    </Button>
                </div>
                <div className="bg-white overflow-x-auto dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>No.</Table.HeadCell>
                            <Table.HeadCell>Nama Kriteria</Table.HeadCell>
                            <Table.HeadCell>Bobot {"(%)"}</Table.HeadCell>
                            <Table.HeadCell>Aksi</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {criterias.data.map(
                                (
                                    item: {
                                        id: number;
                                        name: string;
                                        weight: number;
                                        created_at: string;
                                    },
                                    index: number
                                ) => {
                                    return (
                                        <Table.Row key={index}>
                                            <Table.Cell>{index + 1}</Table.Cell>
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>
                                                {item.weight}
                                            </Table.Cell>
                                            <Table.Cell className="flex gap-3">
                                                <Tooltip content="Tampilkan">
                                                    <Button
                                                        pill
                                                        href={route(
                                                            "criteria.show",
                                                            {
                                                                criterion:
                                                                    item.id,
                                                            }
                                                        )}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEye}
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
                {criterias.total < 1 ? (
                    <div className="flex justify-center w-full p-5">
                        <Alert>Tidak ada data.</Alert>
                    </div>
                ) : (
                    <div className="flex justify-center md:justify-end my-3">
                        <Pagination
                            layout="table"
                            currentPage={criterias.current_page}
                            totalPages={criterias.total}
                            onPageChange={(e) => console.log(e)}
                        />
                    </div>
                )}
            </Main>
        </AuthenticatedLayout>
    );
}
