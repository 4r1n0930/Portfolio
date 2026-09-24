import { useEffect, useState } from "react";

const TARGET = "Welcome to Arin's Archive";
const CHARSET = "!<>-_\\/[]{}=+*^?#@";
const LOCK_STEPS = 6;
const TICK_MS = 36;

const noise = () => CHARSET[(Math.random() * CHARSET.length) | 0];

export default function IntroWelcome() {
  const [display, setDisplay] = useState(
    Array.from({ length: TARGET.length }, noise).join("")
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    const N = TARGET.length;
    const results = new Array(N).fill("");
    let position = 0;
    let step = 0;

    const timer = setInterval(() => {
      if (position >= N) {
        clearInterval(timer);
        setDisplay(TARGET);
        setDone(true);
        return;
      }

      setDisplay(
        Array.from({ length: N }, (_, i) =>
          i < position ? results[i] : noise()
        ).join("")
      );

      step += 1;
      if (step >= LOCK_STEPS) {
        step = 0;
        results[position] = TARGET[position];
        position += 1;
      }
    }, TICK_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="welcome" className="welcome">
      <div className="welcome-echo">
        <span className="ok">[ OK ]</span> arin@root:~ ./archive --init
      </div>
      <div className="welcome-inner">
        <h1 className="welcome-title" aria-label={TARGET}>
          {done ? TARGET : display}
          <span className="caret" />
        </h1>
      </div>
      <div className="scroll-hint">
        <span>SCROLL</span>
        <span className="chevron">▾</span>
      </div>
    </section>
  );
}