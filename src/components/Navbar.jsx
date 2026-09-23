const LINKS = [
  { href: "#identity", label: "whoami" },
  { href: "#intro", label: "intro" },
  { href: "#projects", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#identity">
          {"> "}arin@root:~
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}