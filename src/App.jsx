import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CV from './pages/CV'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Research from './pages/Research'
import ResearchDetail from './pages/ResearchDetail'
import Works from './pages/Works'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CV />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="research" element={<Research />} />
        <Route path="research/:id" element={<ResearchDetail />} />
        <Route path="works" element={<Works />} />
      </Route>
    </Routes>
  )
}

export default App