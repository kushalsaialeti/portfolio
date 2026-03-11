import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  const [atsMode, setAtsMode] = useState(false);
  const [booting, setBooting] = useState(true);

  // Set standard HTML body class on ATS mode toggle
  useEffect(() => {
    if (atsMode) {
      document.documentElement.classList.add('ats-mode');
    } else {
      document.documentElement.classList.remove('ats-mode');
    }
  }, [atsMode]);

  return (
    <Layout atsMode={atsMode} setAtsMode={setAtsMode} booting={booting}>
      <Hero booting={booting} setBooting={setBooting} />
      {!booting && (
        <div className="space-y-32 pb-32">
          <About />
          <Skills atsMode={atsMode} />
          <Projects atsMode={atsMode} />
          <Leadership />
          <Contact />
        </div>
      )}
    </Layout>
  );
}

export default App;
