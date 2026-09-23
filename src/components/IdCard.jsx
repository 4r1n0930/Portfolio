import { useEffect, useState } from "react";
import SmartImage from "./SmartImage.jsx";

const WHOAMI = "$whoami";

export default function IdCard() {
  const [typed, setTyped] = useState("");
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(WHOAMI.slice(0, i));
      if (i >= WHOAMI.length) {
        clearInterval(timer);
        window.setTimeout(() => setShowLine(true), 250);
      }
    }, 110);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="identity" className="hero">
      <div className="wrap">
        <div className="id-card brackets">
          <div className="photo-panel">
            <div className="photo-frame">
              <SmartImage
                pic={1}
                remoteFallback={
                  "https://i.pravatar.cc/600?img=6&ts=" + Date.now()
                }
                alt="hacker avatar"
              />
              <div className="scan" />
              <div className="led">
                <span className="on" />
                <span />
                <span className="on" />
              </div>
              <div className="photo-tag">//Archive</div>
            </div>
            <div className="barcode" />
            <div className="barcode-caption">
              <span>DAVV-BCA-27</span>
              <span>GRN-0x41</span>
            </div>
          </div>

          <div className="id-info">
            <div className="prompt-line">
              <span className="prompt-user">arin</span>
              <span className="at">@</span>
              <span className="path">spectre</span>
              <span className="dollar"> ~$ </span>
              {typed}
              <span className="caret" />
            </div>

            <h1 className="whoami" aria-hidden="true">
              $whoami
            </h1>

            <div>
              <div className="name">
                Arin<span className="accent">_</span>Gupta
              </div>
            </div>

            <div className="badges">
              <span className="badge">// STUDENT</span>
              <span className="badge">// AI Development</span>
              <span className="badge">// Web Development</span>
            </div>

            <div className="badges">
              <span className="badge">DEVI AHILYA VISHWAVIDYALAYA</span>
            </div>

            <div className="id-fields">
              <div className="field">
                <span className="key">id</span>
                <span className="val">ARN-GP-0930</span>
              </div>
              <div className="field">
                <span className="key">status</span>
                <span className="val ok">ACTIVE</span>
              </div>
              <div className="field">
                <span className="key">clearance</span>
                <span className="val ok">ROOT</span>
              </div>
              <div className="field">
                <span className="key">role</span>
                <span className="val">fullstack_dev</span>
              </div>
              <div className="field">
                <span className="key">institution</span>
                <span className="val">DAVV.indore</span>
              </div>
            </div>

            <div className="access-line">
              <span>
                [ {">"} INITIALIZING PROFILE ] {showLine && "OK"}
              </span>
              {showLine && <span className="pill">ACCESS GRANTED</span>}
              {showLine && <span className="caret" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}