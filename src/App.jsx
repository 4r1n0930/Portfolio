import Navbar from "./components/Navbar.jsx";
import IdCard from "./components/IdCard.jsx";
import Intro from "./components/Intro.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <IdCard />
        <Intro />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <footer className="footer">
        <div>// EOF — connection terminated</div>
        <div style={{ marginTop: "0.4rem", color: "var(--neon)" }}>
          arin@root:~$ logout<span className="caret" />
        </div>
      </footer>
    </>
  );
}