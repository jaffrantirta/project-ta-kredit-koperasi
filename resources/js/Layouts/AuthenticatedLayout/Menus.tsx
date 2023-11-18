export const menus = [
    {
        title: "Dashboard",
        url: "dashboard",
        hasChild: false,
    },
    {
        title: "Nasabah",
        hasChild: true,
        url: "#",
        child: [
            {
                title: "List",
                url: "customer.index",
                params: { include: ["user"] },
                hasChild: false,
            },
            // {
            //     title: "Kredit Nasabah",
            //     url: "credit.index",
            //     params: { include: ["customer.user", "status"] },
            //     hasChild: false,
            // },
        ],
    },
    {
        title: "Manajemen",
        hasChild: true,
        url: "#",
        child: [
            {
                title: "Kriteria",
                url: "criteria.index",
                params: { append: ["weight_summary"] },
                hasChild: false,
            },
            {
                title: "Status",
                url: "status.index",
                params: { append: ["value"] },
                hasChild: false,
            },
        ],
    },
    {
        title: "Laporan",
        url: "report",
        hasChild: false,
    },
];
