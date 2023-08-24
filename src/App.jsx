import Intro from './components/Intro'
import Passion from './components/Passion'
import Projects from './components/Projects'
import Papers from './components/Papers'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Languages from './components/Languages'

function App() { 
  return (
    <>
      <Navbar />
      <Intro />
      <Passion />
      <Languages />
      <Projects />
      <Papers />
      <Contact />
    </>
  )
}

export default App
