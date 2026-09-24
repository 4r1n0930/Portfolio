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
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}