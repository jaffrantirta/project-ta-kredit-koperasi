import Main from "@/Components/Main";
import Authenticated from "@/Layouts/AuthenticatedLayout/Index";
import { faPencilAlt, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { Button, Card, Tooltip } from "flowbite-react";
import moment from "moment";

export default function Show({ customer, auth }: { customer: any; auth: any }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detail Nasabah {customer.user?.name}
                </h2>
            }
        >
            <Head title="Detail Nasabah" />

            <Main>
                <Card>
                    <div className="w-full flex gap-3 justify-end">
                        <Tooltip content="Edit">
                            <Button
                                pill
                                href={route("customer.edit", {
                                    customer: customer.id,
                                })}
                            >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Menampilkn list kredit">
                            <Button
                                pill
                                href={route("credit.index", {
                                    include: ["customer.user", "status"],
                                    "filter[customer_id]": customer.id,
                                })}
                            >
                                <div className="flex gap-2 justify-center items-center">
                                    <FontAwesomeIcon icon={faReceipt} />
                                    <p>Kredit</p>
                                </div>
                            </Button>
                        </Tooltip>
                    </div>
                    <div className="w-full border-b"></div>
                    <div className="grid grid-cols-2">
                        <p>NIK</p>
                        <p className="font-bold">{customer.nik}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Nama</p>
                        <p className="font-bold">{customer.user?.name}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Email</p>
                        <p className="font-bold">{customer.user?.email}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Nomor Telepon</p>
                        <p className="font-bold">{customer.phone}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Jenis Kelamin</p>
                        <p className="font-bold">{customer.gender}</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Tanggal Lahir</p>
                        <p className="font-bold">
                            {moment(customer.birthday).format("LL")}
                        </p>
                    </div>
                </Card>
            </Main>
        </Authenticated>
    );
}
