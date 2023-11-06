import { Link } from "@inertiajs/react";

const Item = ({
    isActive = false,
    url,
    children,
}: {
    isActive?: boolean;
    url: any;
    children: any;
}) => {
    if (isActive)
        return (
            <div className="dark:bg-gray-900 dark:text-slate-300 p-3 ml-5 mt-3 rounded-tl-full rounded-bl-full">
                <Link href={url}>{children}</Link>
            </div>
        );
    else
        return (
            <div className="transition-all duration-300 hover:dark:bg-gray-600 dark:text-slate-400 hover:dark:text-slate-100 p-3 ml-5 mt-3 rounded-tl-full rounded-bl-full">
                <Link href={url}>{children}</Link>
            </div>
        );
};

export { Item };

export default function Sidebar({
    className,
    children,
}: {
    className?: string;
    children: any;
}) {
    return (
        <div
            className={`w-fit hidden md:block h-screen sticky top-0 rounded-3xl m-5 bg-white dark:bg-gray-800 ${className}`}
        >
            {children}
        </div>
    );
}
