import { useForm } from "@inertiajs/react";
import { Button, Label, Modal, TextInput } from "flowbite-react";

export default function Create({
    modalShow,
    setModalShow,
}: {
    modalShow: any;
    setModalShow: any;
}) {
    const { post, recentlySuccessful, errors, data, setData } = useForm({
        value: "",
        criteria_id: "",
        customer_credit_id: "",
    });

    const store = () => {
        // post(route(''))
    };
    return (
        <>
            <Modal show={modalShow} onClose={() => setModalShow(!modalShow)}>
                <Modal.Header>Isi nilai kriteria</Modal.Header>
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
                    <Button onClick={() => store()} pill>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
