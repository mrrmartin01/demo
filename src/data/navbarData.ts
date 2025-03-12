type DropdownItem = {
  name: string;
  href: string;
};

type NavItem = {
  id: number;
  name: string;
  dropdown?: DropdownItem[];
  href?: string;
};

export const NavbarData: NavItem[] = [
  {
    id: 1,
    name: "Features",
    dropdown: [
      { name: "Feature 1", href: "#" },
      { name: "Feature 2", href: "#" },
    ],
  },
  {
    id: 2,
    name: "Press",
    href: "press"
  },
  {
    id: 3,
    name: "Company",
    dropdown: [
      { name: "Company 1", href: "#" },
      { name: "Company 2", href: "#" },
    ]
  },
];