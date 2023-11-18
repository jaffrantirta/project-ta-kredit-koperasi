import Main from "@/Components/Main";
import Message from "@/Components/Message";
import Required from "@/Components/Required";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head, useForm } from "@inertiajs/react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { FormEventHandler, useEffect } from "react";

export default function Create({
    auth,
    customer,
    customers,
}: {
    auth: any;
    customer: any;
    customers: any;
}) {
    const {
        data,
        setData,
        post,
        errors,
        processing,
        reset,
        recentlySuccessful,
    } = useForm({
        purpose: "",
        description: "",
        customer_id: customer !== null ? customer.id : "",
        status_id: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("credit.store"));
    };

    useEffect(() => {
        recentlySuccessful && reset();
    }, [recentlySuccessful]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tambah Kredit Nasabah
                </h2>
            }
        >
            <Head title="Tambah Kredit Nasabah" />

            <Main>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <form
                        onSubmit={submit}
                        className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                        <div>
                            <Label>
                                Tujuan kredit
                                <Required />
                            </Label>
                            <TextInput
                                autoFocus
                                type="text"
                                color={errors.purpose ? `failure` : ``}
                                helperText={errors.purpose}
                                value={data.purpose}
                                onChange={(e) =>
                                    setData("purpose", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Label>Deskripsi</Label>
                            <Textarea
                                color={errors.description ? `failure` : ``}
                                helperText={errors.description}
                                value={data.description}
                                rows={4}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Label>
                                Nasabah
                                <Required />
                            </Label>
                            <Select
                                value={data.customer_id}
                                onChange={(e) =>
                                    setData("customer_id", e.target.value)
                                }
                            >
                                <option>Pilih nasabah!</option>
                                {customers.map((item: any, index: number) => {
                                    return (
                                        <option value={item.id} key={index}>
                                            {item.user.name}
                                        </option>
                                    );
                                })}
                            </Select>
                        </div>
                        <div className="flex gap-3 transition-all justify-center items-center col-span-2">
                            <Button disabled={processing} type="submit" pill>
                                Sumbit
                            </Button>
                            <Message show={recentlySuccessful}>
                                Tersimpan.
                            </Message>
                        </div>
                    </form>
                </div>
            </Main>
        </AuthenticatedLayout>
    );
}
