import { useParams, Link } from 'react-router-dom'
import research from '../data/research.json'
import styles from './ResearchDetail.module.css'

function ResearchDetail() {
  const { id } = useParams()
  const paper = research.papers.find((p) => p.id === id)

  if (!paper) {
    return (
      <div className={styles.notFound}>
        <h2>论文未找到</h2>
        <p>抱歉，找不到该论文的详细信息。</p>
        <Link to="/research" className={styles.backLink}>
          返回论文列表
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.detail}>
      <Link to="/research" className={styles.backLink}>
        ← 返回论文列表
      </Link>

      <h1 className={styles.title}>{paper.title}</h1>
      <p className={styles.subtitle}>{paper.subtitle}</p>

      {paper.image && (
        <div className={styles.imageWrapper}>
          <img src={paper.image} alt={paper.title} className={styles.image} />
        </div>
      )}

      <div className={styles.content}>
        {paper.authors && paper.authors.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>作者</h3>
            <p className={styles.authors}>{paper.authors.join(', ')}</p>
          </div>
        )}

        {paper.journal && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>发表期刊</h3>
            <p className={styles.journal}>{paper.journal}</p>
          </div>
        )}

        {paper.date && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>发表时间</h3>
            <p className={styles.date}>{paper.date}</p>
          </div>
        )}

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>摘要</h3>
          <p className={styles.abstract}>{paper.abstract}</p>
        </div>

        {paper.tags && paper.tags.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>关键词</h3>
            <div className={styles.tags}>
              {paper.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {paper.link && (
          <div className={styles.section}>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.paperLink}
            >
              阅读论文 →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResearchDetail