import ResearchCard from '../components/ResearchCard'
import research from '../data/research.json'
import styles from './Research.module.css'

function Research() {
  return (
    <div className={styles.research}>
      <h1 className={styles.pageTitle}>科研经历</h1>
      <p className={styles.pageDescription}>
        以下是我在学术研究方面的主要成果，包括发表的论文和参与的科研项目。
      </p>
      <div className={styles.list}>
        {research.papers.map((paper) => (
          <ResearchCard key={paper.id} paper={paper} />
        ))}
      </div>
    </div>
  )
}

export default Research