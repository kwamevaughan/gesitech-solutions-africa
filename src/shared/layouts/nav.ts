export interface NavLink {
  href: string;
  label: string;
  isAnchor: boolean;
}

export const navLinks: NavLink[] = [
  { href: "#about", label: "About", isAnchor: true },
  { href: "#services", label: "Services", isAnchor: true },
  { href: "#products", label: "Products", isAnchor: true },
  { href: "#ecosystem", label: "Ecosystem", isAnchor: true },
  { href: "#platform", label: "Platform", isAnchor: true },
  { href: "#journey", label: "Journey", isAnchor: true },
  { href: "#leadership", label: "Leadership", isAnchor: true },
  { href: "#certifications", label: "Certifications", isAnchor: true },
  { href: "#partners", label: "Partners", isAnchor: true },
];
