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
                hasChild: false,
            },
            {
                title: "Kredit Nasabah",
                url: "credit.index",
                hasChild: false,
            },
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
                hasChild: false,
            },
            {
                title: "Status",
                url: "status.index",
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
