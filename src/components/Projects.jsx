import SmartImage from "./SmartImage.jsx";

const PROJECTS = [
  {
    id: "01",
    pic: 2,
    name: "Qubera",
    desc: "Fear of Quantum Computing transformed to fun",
    tags: ["three.js", "gsap"],
    img: "https://picsum.photos/seed/qubera/720/480",
  },
  {
    id: "02",
    pic: 3,
    name: "Impression",
    desc: "Eradicating the fear of Interviews by creating an environment for friends",
    tags: ["react", "vite"],
    img: "https://picsum.photos/seed/impression/720/480",
  },
  {
    id: "03",
    pic: 4,
    name: "Systum",
    desc: "Design your day efficiently-{stop wasting time on thinking what to do}",
    tags: ["node", "express", "mongo"],
    img: "https://picsum.photos/seed/systum/720/480",
  },
  {
    id: "04",
    pic: 5,
    name: "KiranaGo",
    desc: "Automating the inventory management and customer interaction.",
    tags: ["react", "mongodb", "node"],
    img: "https://picsum.photos/seed/kiranago/720/480",
  },
  {
    id: "05",
    pic: 6,
    name: "KisanSathi",
    desc: "Say bye bye to Mandi, because advanced technology is here",
    tags: ["python", "fastapi", "react"],
    img: "https://picsum.photos/seed/kisansathi/720/480",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2 className="section-head">
          <span className="mark">//</span> projects
          <span className="suffix">ls -la ~/repos</span>
        </h2>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <article className="proj-card" key={p.id}>
              <div className="proj-img">
                <span className="proj-idx">{p.id}</span>
                <SmartImage pic={p.pic} remoteFallback={p.img} alt={p.name} />
              </div>
              <div className="proj-body">
                <div>
                  <div className="proj-name">./{p.name}</div>
                  <div className="proj-status">status: deployed</div>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article className="proj-card soon">
            <div>
              <div
                className="soon-text glitch"
                data-text="// COMING SOON"
              >
                // COMING SOON
              </div>
              <div className="soon-sub">[ encrypting in progress ... ]</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}