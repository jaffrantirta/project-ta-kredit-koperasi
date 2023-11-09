import Main from "@/Components/Main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head, useForm } from "@inertiajs/react";
import { log } from "console";
import {
    Button,
    Label,
    Select,
    Table,
    TextInput,
    Textarea,
} from "flowbite-react";
import { FormEventHandler } from "react";

export default function Create({ auth }: { auth: any }) {
    const {
        data,
        setData,
        post,
        errors,
        hasErrors,
        processing,
        recentlySuccessful,
    } = useForm({
        user: {
            name: "",
            email: "",
            password: "password",
            password_confirmation: "password",
        },
        customer: {
            nik: "",
            phone: "",
            gender: "",
            birthday: "",
            occupation: "",
            address: "",
        },
        isCustomer: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    const getError = (param: any) => {
        return JSON.parse(JSON.stringify(errors))[param];
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tambah Nasabah
                </h2>
            }
        >
            <Head title="Tambah Nasabah" />

            <Main>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <form
                        onSubmit={submit}
                        className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                        <div>
                            <Label>Nama</Label>
                            <TextInput
                                autoFocus
                                autoComplete="username"
                                type="text"
                                color={getError("user.name") ? `failure` : ``}
                                helperText={getError("user.name")}
                                value={data.user.name}
                                onChange={(e) =>
                                    setData("user", {
                                        ...data.user,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <Label>NIK</Label>
                            <TextInput
                                type="text"
                                color={
                                    getError("customer.nik") ? `failure` : ``
                                }
                                helperText={getError("customer.nik")}
                                value={data.customer.nik}
                                onChange={(e) =>
                                    setData("customer", {
                                        ...data.customer,
                                        nik: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <Label>Telepon</Label>
                            <TextInput
                                type="number"
                                color={
                                    getError("customer.phone") ? `failure` : ``
                                }
                                helperText={getError("customer.phone")}
                                value={data.customer.phone}
                                onChange={(e) =>
                                    setData("customer", {
                                        ...data.customer,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <TextInput
                                type="email"
                                color={getError("user.email") ? `failure` : ``}
                                helperText={getError("user.email")}
                                value={data.user.email}
                                onChange={(e) =>
                                    setData("user", {
                                        ...data.user,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <Label>Jenis Kelamin</Label>
                            <Select
                                color={
                                    getError("customer.gender") ? `failure` : ``
                                }
                                helperText={getError("customer.gender")}
                                value={data.customer.gender}
                                onChange={(e) =>
                                    setData("customer", {
                                        ...data.customer,
                                        gender: e.target.value,
                                    })
                                }
                            >
                                <option value={`male`}>Laki - Laki</option>
                                <option value={`female`}>Perempuan</option>
                            </Select>
                        </div>
                        <div>
                            <Label>Tanggal Lahir</Label>
                            <TextInput
                                type="date"
                                color={
                                    getError("customer.birthday")
                                        ? `failure`
                                        : ``
                                }
                                helperText={getError("customer.birthday")}
                                value={data.customer.birthday}
                                onChange={(e) =>
                                    setData("customer", {
                                        ...data.customer,
                                        birthday: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <Label>Pekerjaan</Label>
                            <TextInput
                                type="text"
                                color={
                                    getError("customer.occupation")
                                        ? `failure`
                                        : ``
                                }
                                helperText={getError("customer.occupation")}
                                value={data.customer.occupation}
                                onChange={(e) =>
                                    setData("customer", {
                                        ...data.customer,
                                        occupation: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <Label>Alamat</Label>
                            <Textarea
                                rows={5}
                                color={
                                    getError("customer.address")
                                        ? `failure`
                                        : ``
                                }
                                helperText={getError("customer.address")}
                                value={data.customer.address}
                                onChange={(e) =>
                                    setData("customer", {
                                        ...data.customer,
                                        address: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex justify-center items-center col-span-2">
                            <Button type="submit" pill>
                                Sumbit
                            </Button>
                        </div>
                    </form>
                </div>
            </Main>
        </AuthenticatedLayout>
    );
}
