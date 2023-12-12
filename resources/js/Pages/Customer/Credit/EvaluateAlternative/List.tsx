import { useForm } from "@inertiajs/react";
import { Alert, Button, Table } from "flowbite-react";

export default function List({
    evaluate_alternatives,
    customer_credit_id,
}: {
    evaluate_alternatives: any;
    criterias: any;
    customer_credit_id: number;
}) {
    const { recentlySuccessful, errors, hasErrors, post } = useForm({
        customer_credit_id: customer_credit_id,
    });

    console.log(customer_credit_id, "asas");

    const attemptSummary = () => {
        post(route("evaluate-alternative.summary"));
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

            <div className="flex justify-center md:justify-between items-center">
                <h3 className="font-bold">Evaluasi Alternatif</h3>
                <Button onClick={() => attemptSummary()} pill className="my-3">
                    Hitung
                </Button>
            </div>
            <div className="bg-white overflow-x-auto dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>No.</Table.HeadCell>
                        <Table.HeadCell>Kriteria</Table.HeadCell>
                        <Table.HeadCell>Nilai</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {evaluate_alternatives.map(
                            (item: any, index: number) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>
                                            {item.criteria.name}
                                        </Table.Cell>
                                        <Table.Cell>{item.value}</Table.Cell>
                                    </Table.Row>
                                );
                            }
                        )}
                    </Table.Body>
                </Table>
            </div>
        </>
    );
}
