export default function Intro() {
  return (
    <section id="intro">
      <div className="wrap">
        <h2 className="section-head">
          <span className="mark">//</span> blog
          <span className="suffix">~/arin/intro.txt</span>
        </h2>

        <div className="term brackets">
          <div className="term-title">
            <span className="dot on" />
            <span className="dot" />
            <span className="dot" />
            <span>arin@root:~/intro.txt</span>
          </div>

          <div className="term-body intro-text">
            <p>
              <span className="lines hi">&gt; Hi, I am Arin.</span>
            </p>
            <p>
              <span className="lines">&gt; welcome to my terminal.</span>
            </p>
            <p>
              <span className="cmt">
                # I treat every problem like an encryption — the lock is just a
                door I have not studied yet. I break big goals into small
                commits, iterate in the dark anyway, and ship before I feel
                ready. Curiosity is my only constant; keyboard is my main
                weapon.
              </span>
            </p>
            <p>
              <span className="cmt">
                # stay sharp, stay consistent, and never let a stack overflow
                overflow your ambition.
              </span>
            </p>
            <p>
              <span className="lines">&gt; while (mind.isOpen()) keep_building();</span>
              <span className="caret" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}