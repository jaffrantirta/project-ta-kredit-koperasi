import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "@inertiajs/react";
import { Alert, Button, Modal, Table, Tooltip } from "flowbite-react";
import { useState } from "react";

export default function List({ assign_weights }: { assign_weights: any }) {
    const { delete: remove, recentlySuccessful } = useForm();
    const [modalShow, setModalShow] = useState(false);
    const [deletionId, setDeletionId] = useState(0);

    const destroy = (id: number) => {
        remove(route("assign-weight.destroy", id));
        setModalShow(!modalShow);
    };

    return (
        <>
            {recentlySuccessful && <Alert color={`success`}>Sukses!</Alert>}
            <Modal show={modalShow} onClose={() => setModalShow(!modalShow)}>
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
                <h3 className="font-bold">Penetapan Bobot</h3>
                <Button pill className="my-3">
                    Hitung
                </Button>
            </div>
            <div className="bg-white overflow-x-auto dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>No.</Table.HeadCell>
                        <Table.HeadCell>Kriteria</Table.HeadCell>
                        <Table.HeadCell>Nilai</Table.HeadCell>
                        <Table.HeadCell>Aksi</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {assign_weights.map((item: any, index: number) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>
                                        {item.criteria.name}
                                    </Table.Cell>
                                    <Table.Cell>{item.value}</Table.Cell>
                                    <Table.Cell className="flex gap-3">
                                        <Tooltip content="Edit">
                                            <Button
                                                pill
                                                href={route(
                                                    "assign-weight.show",
                                                    {
                                                        assign_weight: item.id,
                                                        include: [
                                                            "customer",
                                                            "status",
                                                            "customerCreditNormalizations",
                                                            "customerCreditEvaluateAlternatives",
                                                            "customerCreditAssignWeights",
                                                        ],
                                                    }
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPencil}
                                                />
                                            </Button>
                                        </Tooltip>
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </div>
        </>
    );
}
