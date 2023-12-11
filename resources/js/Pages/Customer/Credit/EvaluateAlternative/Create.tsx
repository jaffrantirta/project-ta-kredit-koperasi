import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useEffect } from "react";

export default function Create({
    modalShow = false,
    setModalShow,
    criterias,
    customer_credit_id,
}: {
    modalShow: any;
    setModalShow: any;
    criterias: any;
    customer_credit_id: number;
}) {
    const { post, recentlySuccessful, errors, data, setData, reset } = useForm({
        value: "",
        criteria_id: "",
        customer_credit_id: customer_credit_id,
    });

    const store = () => {
        post(route("evaluate-alternative.store"));
    };

    useEffect(() => {
        if (recentlySuccessful) {
            reset();
            setModalShow(!modalShow);
        }
    }, [recentlySuccessful]);

    return (
        <>
            <Modal show={modalShow} onClose={() => setModalShow(!modalShow)}>
                <Modal.Header>Isi nilai kriteria</Modal.Header>
                <Modal.Body>
                    <div>
                        <Label>Kriteria</Label>
                        <Select
                            onChange={(e: any) =>
                                setData("criteria_id", e.target.value)
                            }
                        >
                            <option>Pilih kriteria</option>
                            {criterias.map((criteria: any) => {
                                return (
                                    <option
                                        key={criteria.id}
                                        value={criteria.id}
                                    >
                                        {criteria.name}
                                    </option>
                                );
                            })}
                        </Select>
                        <InputError
                            message={errors.criteria_id}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label>Nilai</Label>
                        <TextInput
                            className="w-full text-center"
                            value={data.value}
                            onChange={(e) => setData("value", e.target.value)}
                        />
                        <InputError message={errors.value} className="mt-2" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => setModalShow(!modalShow)}
                        pill
                        color="light"
                    >
                        Batal
                    </Button>
                    <Button onClick={() => store()} pill>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
