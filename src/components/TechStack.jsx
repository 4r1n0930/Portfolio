const STACK = [
  { name: "Node.js", slug: "nodedotjs", ver: "v22.x" },
  { name: "Vite", slug: "vite", ver: "v5.x" },
  { name: "Express", slug: "express", ver: "v4.x" },
  { name: "MongoDB", slug: "mongodb", ver: "v7.x" },
  { name: "React", slug: "react", ver: "v18.x" },
  { name: "Python", slug: "python", ver: "v3.12" },
  { name: "FastAPI", slug: "fastapi", ver: "v0.115" },
  { name: "Blender", slug: "blender", ver: "v4.x" },
  { name: "Three.js", slug: "threedotjs", ver: "v0.160" },
  { name: "GSAP", slug: "greensock", ver: "v3.12" },
];

export default function TechStack() {
  return (
    <section id="stack">
      <div className="wrap">
        <h2 className="section-head">
          <span className="mark">//</span> tech stack
          <span className="suffix">apt list --installed</span>
        </h2>

        <div className="tech-grid">
          {STACK.map((t) => (
            <div className="tech-item" key={t.slug}>
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/00ff41`}
                alt={t.name}
                width={34}
                height={34}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
              <span className="t-name">{t.name}</span>
              <span className="t-ver">{t.ver}</span>
            </div>
          ))}
        </div>

        <div className="term term-install brackets" style={{ marginTop: "1.6rem" }}>
          <div className="term-title">
            <span className="dot on" />
            <span className="dot" />
            <span className="dot" />
            <span>install.log</span>
          </div>
          <div className="term-body">
            <div className="row">
              <span className="pkg">npx create-vite@latest</span>
              <span className="ok">[ OK ]</span>
            </div>
            <div className="row">
              <span className="pkg">npm i express mongodb mongoose</span>
              <span className="ok">[ OK ]</span>
            </div>
            <div className="row">
              <span className="pkg">pip install fastapi uvicorn</span>
              <span className="ok">[ OK ]</span>
            </div>
            <div className="row">
              <span className="pkg">npm i three gsap</span>
              <span className="ok">[ OK ]</span>
            </div>
            <div className="row">
              <span className="pkg">blender --render-scene 3d/models/*.blend</span>
              <span className="ok">[ OK ]</span>
            </div>
            <div className="row">
              <span className="pkg">system.all_modules</span>
              <span className="ok">[ READY ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}