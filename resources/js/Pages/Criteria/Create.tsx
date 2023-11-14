import Main from "@/Components/Main";
import Message from "@/Components/Message";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head, useForm } from "@inertiajs/react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { FormEventHandler, useEffect } from "react";

export default function Create({
    criteria,
    auth,
}: {
    criteria?: any;
    auth: any;
}) {
    const {
        data,
        setData,
        post,
        patch,
        errors,
        processing,
        reset,
        recentlySuccessful,
    } = useForm({
        name: route().current("criteria.create") ? "" : criteria.name,
        weight: route().current("criteria.create") ? "" : criteria.weight,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        route().current("criteria.create")
            ? post(route("criteria.store"))
            : patch(route("criteria.update", { criterion: criteria.id }));
    };

    useEffect(() => {
        recentlySuccessful && reset();
    }, [recentlySuccessful]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {route().current("criteria.create")
                        ? "Tambah Kriteria"
                        : "Edit Kriteria"}
                </h2>
            }
        >
            <Head
                title={
                    route().current("criteria.create")
                        ? "Tambah Kriteria"
                        : "Edit Kriteria"
                }
            />

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
                                type="text"
                                color={errors.name ? `failure` : ``}
                                helperText={errors.name}
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Label>Bobot {"(%)"}</Label>
                            <TextInput
                                color={errors.weight ? `failure` : ``}
                                helperText={errors.weight}
                                value={data.weight}
                                onChange={(e) =>
                                    setData("weight", e.target.value)
                                }
                            />
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
