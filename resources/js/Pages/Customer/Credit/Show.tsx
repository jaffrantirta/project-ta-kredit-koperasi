import Main from "@/Components/Main";
import Authenticated from "@/Layouts/AuthenticatedLayout/Index";
import { faPencilAlt, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { Button, Card, Tooltip } from "flowbite-react";
import ListAssignWeight from "./AssignWeight/List";
import ListEvaluateAlternative from "./EvaluateAlternative/List";
import ListNormalization from "./Normalization/List";
import Devider from "@/Components/Devider";

export default function Show({
    credit,
    criterias,
    auth,
}: {
    credit: any;
    criterias: any;
    auth: any;
}) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detail Kredit Nasabah {credit.customer?.user?.name}
                </h2>
            }
        >
            <Head title="Detail Kredit Nasabah" />

            <Main>
                <Card>
                    <div className="w-full flex gap-3 justify-end">
                        <Tooltip content="Edit">
                            <Button
                                pill
                                href={route("credit.edit", {
                                    credit: credit.id,
                                })}
                            >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                        </Tooltip>
                    </div>
                    <Devider />
                    <div className="grid grid-cols-2">
                        <p>Tujuan</p>
                        <p className="font-bold">{credit.purpose}</p>
                    </div>

                    <div className="grid grid-cols-1">
                        <p className="italic">{credit.description}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Pengaju Kredit</p>
                        <p className="font-bold">
                            {credit.customer?.user?.name}
                        </p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Status</p>
                        <p className="font-bold">{credit.status?.name}</p>
                    </div>
                </Card>

                <Devider className="border-slate-300 mt-7" />

                <ListAssignWeight
                    assign_weights={credit.customer_credit_assign_weights}
                    criterias={criterias}
                    customer_credit={credit}
                />

                <Devider className="border-slate-300 mt-7" />

                <ListNormalization
                    normalizations={credit.customer_credit_normalizations}
                    customer_credit_id={credit.id}
                />

                <Devider className="border-slate-300 mt-7" />

                <ListEvaluateAlternative
                    evaluate_alternatives={
                        credit.customer_credit_evaluate_alternatives
                    }
                    criterias={criterias}
                    customer_credit_id={credit.id}
                />
            </Main>
        </Authenticated>
    );
}
