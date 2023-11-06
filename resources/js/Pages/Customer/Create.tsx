import Main from "@/Components/Main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head, useForm } from "@inertiajs/react";
import { Button, Label, Table, TextInput, Textarea } from "flowbite-react";
import { FormEventHandler } from "react";

export default function Create({ auth }: { auth: any }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: "",
            nik: "",
            phone: "",
            email: "",
            gender: "",
            birthday: "",
            occupotion: "",
            address: "",
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("customer.store"));
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
                    <form className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <Label>Nama</Label>
                            <TextInput
                                autoFocus
                                autoComplete="username"
                                type="text"
                                color={``}
                                helperText={``}
                            />
                        </div>
                        <div>
                            <Label>NIK</Label>
                            <TextInput
                                type="number"
                                color={``}
                                helperText={``}
                            />
                        </div>
                        <div>
                            <Label>Telepon</Label>
                            <TextInput
                                type="number"
                                color={``}
                                helperText={``}
                            />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <TextInput
                                type="email"
                                color={``}
                                helperText={``}
                            />
                        </div>
                        <div>
                            <Label>Jenis Kelamin</Label>
                            <TextInput type="text" color={``} helperText={``} />
                        </div>
                        <div>
                            <Label>Tanggal Lahir</Label>
                            <TextInput type="date" color={``} helperText={``} />
                        </div>
                        <div>
                            <Label>Pekerjaan</Label>
                            <TextInput type="text" color={``} helperText={``} />
                        </div>
                        <div>
                            <Label>Alamat</Label>
                            <Textarea rows={5} color={``} helperText={``} />
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
