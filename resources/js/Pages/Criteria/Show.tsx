import Main from "@/Components/Main";
import Authenticated from "@/Layouts/AuthenticatedLayout/Index";
import { Head } from "@inertiajs/react";
import { Card } from "flowbite-react";
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
