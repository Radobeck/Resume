import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Main />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
