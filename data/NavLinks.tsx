

export const Navlinks = [
    {
        label: "Boxes by industry",
        href: "/all-products",
        type: "mega",
        children: [
            {
                items: [
                    {
                        label: "Top Tuck Auto-lock Boxes",
                        href: "/category/corrugated-boxes",
                    },
                    {
                        label: "Mylar Bags",
                        href: "/mylar-bags",
                    },
                    {
                        label: "CBD Boxes",
                        href: "/cbd-boxes",
                    },
                    {
                        label: "Mailer Boxes",
                        href: "/mailer-boxes",
                    },
                    {
                        label: "Kraft Boxes",
                        href: "/kraft-boxes",
                    },
                    {
                        label: "Cardboard Boxes",
                        href: "/cardboard-boxes",
                    },
                    {
                        label: "Shapes & Styles",
                        href: "/shapes-styles",
                    },
                    {
                        label: "Pet Boxes",
                        href: "/pet-boxes",
                    },
                ],
            },
        ],
    },

    {
        label: "Boxes By Style",
        href: "/industries",
        type: "mega",
        children: [
            {
                items: [
                    {
                        label: "Top Tuck Auto-lock Boxes",
                        href: "/category/corrugated-boxes",
                    },
                    {
                        label: "Mylar Bags",
                        href: "/mylar-bags",
                    },
                    {
                        label: "CBD Boxes",
                        href: "/cbd-boxes",
                    },
                    {
                        label: "Mailer Boxes",
                        href: "/mailer-boxes",
                    },
                    {
                        label: "Kraft Boxes",
                        href: "/kraft-boxes",
                    },
                    {
                        label: "Cardboard Boxes",
                        href: "/cardboard-boxes",
                    },
                    {
                        label: "Shapes & Styles",
                        href: "/shapes-styles",
                    },
                    {
                        label: "Pet Boxes",
                        href: "/pet-boxes",
                    },
                ],
            },
        ],
    },

    {
        label: "Boxes By Material",
        href: "/products",
        type: "dropdown",
        children: [
            { label: "Corrugated", href: "/material/corrugated" },
            { label: "Kraft", href: "/material/kraft" },
            { label: "Rigid", href: "/material/rigid" },
        ],
    },

    {
        label: "Contact Us",
        href: "/contact-us",
        type: "link",
    },
];

export type NavLink = {
    type: "link";
    label: string;
    href?: string;
};

export type Dropdown = {
    type: "dropdown";
    href?: string;
    label: string;
    children: { label: string; href: string }[];
};

export type MegaMenu = {
    type: "mega";
    href?: string;
    label: string;
    children: {
        items: {
            label: string;
            href: string;
        }[];
    }[];
};

export type NavigationItem = NavLink | Dropdown | MegaMenu;