import Main from "@/Components/Main";
import Message from "@/Components/Message";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Head, useForm } from "@inertiajs/react";
import { Button, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect } from "react";

export default function Create({ status, auth }: { status?: any; auth: any }) {
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
        name: route().current("status.create") ? "" : status.name,
        minimum_value: route().current("status.create")
            ? ""
            : status.minimum_value,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        route().current("status.create")
            ? post(route("status.store"))
            : patch(route("status.update", { status: status.id }));
    };

    useEffect(() => {
        recentlySuccessful && reset();
    }, [recentlySuccessful]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {route().current("status.create")
                        ? "Tambah Status"
                        : "Edit Status"}
                </h2>
            }
        >
            <Head
                title={
                    route().current("status.create")
                        ? "Tambah Status"
                        : "Edit Status"
                }
            />

            <Main>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <form
                        onSubmit={submit}
                        className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                        <div>
                            <Label>Nama Status</Label>
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
                            <Label>Minimum Nilai Untuk Lolos</Label>
                            <TextInput
                                color={errors.minimum_value ? `failure` : ``}
                                helperText={errors.minimum_value}
                                value={data.minimum_value}
                                onChange={(e) =>
                                    setData("minimum_value", e.target.value)
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
