import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'
import styles from './Projects.module.css'

function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.pageTitle}>项目经历</h1>
      <p className={styles.pageDescription}>
        以下是我参与的主要项目，涵盖人工智能、机器学习和软件开发等领域。
      </p>
      <div className={styles.grid}>
        {projects.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects