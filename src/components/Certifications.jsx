export default function Certifications() {
  return (
    <section id="certs">
      <div className="wrap">
        <h2 className="section-head">
          <span className="mark">//</span> certifications
          <span className="suffix">verif --scan ~/credentials</span>
        </h2>

        <div className="cert-grid">
          <article className="term brackets cert-card">
            <div className="term-title">
              <span className="dot on" />
              <span className="dot" />
              <span className="dot" />
              <span>cert --technical</span>
            </div>
            <div className="term-body">
              <div className="cert-name">
                <span className="cert-key">category</span> :: TECHNICAL
              </div>
              <p className="cert-cmd">certificates --list --verified</p>
              <p className="cmt">
                # technical certifications — development, AI/ML, cloud and
                systems tracks — get listed here.
              </p>
              <a
                className="cert-link"
                href="https://drive.google.com/drive/folders/14ZZ8luO0vtCH983yt0A9WnfoYIOZXPU6?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                open --credentials ↗
              </a>
            </div>
          </article>

          <article className="term brackets cert-card">
            <div className="term-title">
              <span className="dot on" />
              <span className="dot" />
              <span className="dot" />
              <span>cert --co-curricular</span>
            </div>
            <div className="term-body">
              <div className="cert-name">
                <span className="cert-key">category</span> :: CO-CURRICULAR
              </div>
              <p className="cert-cmd">certificates --list --verified</p>
              <p className="cmt">
                # hackathons, events, workshops and extracurricular credentials
                get listed here.
              </p>
              <a
                className="cert-link"
                href="https://drive.google.com/drive/folders/1247sZgk3qeHQbZizofhJMw5iQJu9oleu?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                open --credentials ↗
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}