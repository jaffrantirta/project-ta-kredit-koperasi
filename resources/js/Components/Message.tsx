import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

export default function Message({
    show,
    children,
}: {
    show: boolean;
    children: ReactNode;
}) {
    return (
        <Transition
            show={show}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
        >
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {children}
            </p>
        </Transition>
    );
}
