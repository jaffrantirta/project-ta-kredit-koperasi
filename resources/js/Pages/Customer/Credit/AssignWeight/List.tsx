import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "@inertiajs/react";
import {
    Alert,
    Button,
    Label,
    Modal,
    Table,
    TextInput,
    Tooltip,
} from "flowbite-react";
import { useState } from "react";
import ModalCreateAssignWeight from "./Create";

export default function List({
    assign_weights,
    criterias,
    customer_credit,
}: {
    assign_weights: any;
    criterias: any;
    customer_credit: any;
}) {
    const { patch, recentlySuccessful, errors, hasErrors, data, setData } =
        useForm({
            id: 0,
            criteria: "",
            value: "",
        });
    const [modalShow, setModalShow] = useState(false);
    const [modalAssignWeight, setModalAssignWeight] = useState(false);
    const update = () => {
        patch(
            route("assign-weight.update", {
                assign_weight: data.id,
            })
        );
        setModalShow(!modalShow);
    };

    const onClickHandle = (i: any) => {
        setData((prevData) => ({
            ...prevData,
            value: i.value,
            criteria: i.criteria.name,
            id: i.id,
        }));
        setModalShow(!modalShow);
    };

    return (
        <>
            {recentlySuccessful && <Alert color={`success`}>Sukses!</Alert>}
            {hasErrors &&
                Object.entries(errors).map((item: any, ind: any) => (
                    <Alert key={ind} color={`failure`}>
                        {item.map((error: any, index: any) => (
                            <p key={index}>{error}</p>
                        ))}
                    </Alert>
                ))}

            <Modal show={modalShow} onClose={() => setModalShow(!modalShow)}>
                <Modal.Header>Isi nilai kriteria {data.criteria}</Modal.Header>
                <Modal.Body>
                    <Label>Nilai</Label>
                    <TextInput
                        className="w-full text-center"
                        value={data.value}
                        onChange={(e) => setData("value", e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => setModalShow(!modalShow)}
                        pill
                        color="light"
                    >
                        Batal
                    </Button>
                    <Button onClick={() => update()} pill>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="flex justify-center md:justify-between items-center">
                <h3 className="font-bold">Penetapan Bobot Tiap Kriteria</h3>
                <Button
                    pill
                    className="my-3"
                    onClick={() => setModalAssignWeight(!modalAssignWeight)}
                    // href={route("assign-weight.create", {
                    //     customer_id: assign_weights.customer_id,
                    // })}
                >
                    Tambah
                </Button>
                <ModalCreateAssignWeight
                    modalShow={modalAssignWeight}
                    setModalShow={() =>
                        setModalAssignWeight(!modalAssignWeight)
                    }
                    criterias={criterias}
                    customer_credit_id={customer_credit.id}
                />
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
                                                onClick={() =>
                                                    onClickHandle(item)
                                                }
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
