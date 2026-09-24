export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <h2 className="section-head">
          <span className="mark">//</span> contact
          <span className="suffix">nc --open-channel</span>
        </h2>

        <div className="contact-grid">
          <div className="term brackets">
            <div className="term-title">
              <span className="dot on" />
              <span className="dot" />
              <span className="dot" />
              <span>signal.conf</span>
            </div>
            <div className="term-body">
              <a className="contact-line" href="mailto:reliablearin@gmail.com">
                <span className="c-key">EMAIL</span>
                <span className="c-val">reliablearin@gmail.com</span>
              </a>
              <a className="contact-line" href="tel:+919343717006">
                <span className="c-key">CONTACT</span>
                <span className="c-val">+91 93437 17006</span>
              </a>
              <a
                className="contact-line"
                href="https://github.com/4r1n0930"
                target="_blank"
                rel="noreferrer"
              >
                <span className="c-key">GITHUB</span>
                <span className="c-val">github-4r1n</span>
              </a>
              <a
                className="contact-line"
                href="https://www.linkedin.com/in/4r1n0930"
                target="_blank"
                rel="noreferrer"
              >
                <span className="c-key">LINKEDIN</span>
                <span className="c-val">linkedin-4r1n</span>
              </a>
            </div>
          </div>

          <div className="status-bar">
            <div>
              <span className="prompt">[ root@davv ~ ]$ </span>transmit();
            </div>
            <div style={{ marginTop: "0.6rem" }}>
              [ {">"} channel.open() ... <span className="prompt">OK</span> ]
            </div>
            <div>
              [ {">"} awaiting_response ... <span className="caret" /> ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}