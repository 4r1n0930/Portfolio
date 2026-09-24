const TECHNICAL = [
  "Frontend Development",
  "Backend Development",
  "RAG Systems",
  "Cloud Computing",
  "DSA",
  "Linux",
  "App Development",
];

const SOFT = ["Learning Attitude", "Leadership", "Discipline", "Consistency"];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2 className="section-head">
          <span className="mark">//</span> skills
          <span className="suffix">cat ~/skills.def</span>
        </h2>

        <div className="skills-grid">
          <article className="term brackets skill-card">
            <div className="term-title">
              <span className="dot on" />
              <span className="dot" />
              <span className="dot" />
              <span>skills --technical</span>
            </div>
            <div className="term-body">
              <div className="skill-cmd">skill --list technical</div>
              <div className="skill-tags">
                {TECHNICAL.map((s) => (
                  <span className="skill-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="term brackets skill-card">
            <div className="term-title">
              <span className="dot on" />
              <span className="dot" />
              <span className="dot" />
              <span>skills --soft</span>
            </div>
            <div className="term-body">
              <div className="skill-cmd">skill --list soft</div>
              <div className="skill-tags">
                {SOFT.map((s) => (
                  <span className="skill-tag soft" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}