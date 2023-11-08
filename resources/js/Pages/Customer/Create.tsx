import Main from "@/Components/Main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head, useForm } from "@inertiajs/react";
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
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            "user[name]": "",
            "user[email]": "",
            "customer[nik]": "",
            "customer[phone]": "",
            "customer[gender]": "",
            "customer[birthday]": "",
            "customer[occupotion]": "",
            "customer[address]": "",
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("customer.store"));
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
                                color={errors["user[name]"] ? `failure` : ``}
                                helperText={errors["user[name]"]}
                                value={data["user[name]"]}
                                onChange={(e) =>
                                    setData("user[name]", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Label>NIK</Label>
                            <TextInput
                                type="number"
                                color={errors["customer[nik]"] ? `failure` : ``}
                                helperText={errors["customer[nik]"]}
                                value={data["customer[nik]"]}
                                onChange={(e) =>
                                    setData("customer[nik]", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Label>Telepon</Label>
                            <TextInput
                                type="number"
                                color={
                                    errors["customer[phone]"] ? `failure` : ``
                                }
                                helperText={errors["customer[phone]"]}
                                value={data["customer[phone]"]}
                                onChange={(e) =>
                                    setData("customer[phone]", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <TextInput
                                type="email"
                                color={errors["user[email]"] ? `failure` : ``}
                                helperText={errors["user[email]"]}
                                value={data["user[email]"]}
                                onChange={(e) =>
                                    setData("user[email]", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Label>Jenis Kelamin</Label>
                            <Select
                                color={
                                    errors["customer[gender]"] ? `failure` : ``
                                }
                                helperText={errors["customer[gender]"]}
                                value={data["customer[gender]"]}
                                onChange={(e) =>
                                    setData("customer[gender]", e.target.value)
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
                                    errors["customer[birthday]"]
                                        ? `failure`
                                        : ``
                                }
                                helperText={errors["customer[birthday]"]}
                                value={data["customer[birthday]"]}
                                onChange={(e) =>
                                    setData(
                                        "customer[birthday]",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <div>
                            <Label>Pekerjaan</Label>
                            <TextInput
                                type="text"
                                color={
                                    errors["customer[occupotion]"]
                                        ? `failure`
                                        : ``
                                }
                                helperText={errors["customer[occupotion]"]}
                                value={data["customer[occupotion]"]}
                                onChange={(e) =>
                                    setData(
                                        "customer[occupotion]",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <div>
                            <Label>Alamat</Label>
                            <Textarea
                                rows={5}
                                color={
                                    errors["customer[address]"] ? `failure` : ``
                                }
                                helperText={errors["customer[address]"]}
                                value={data["customer[address]"]}
                                onChange={(e) =>
                                    setData("customer[address]", e.target.value)
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
