import { Link } from 'react-router-dom'
import styles from './ResearchCard.module.css'

function ResearchCard({ paper, showDetails = false }) {
  const content = (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{paper.title}</h3>
        <p className={styles.subtitle}>{paper.subtitle}</p>
        {paper.tags && paper.tags.length > 0 && (
          <div className={styles.tags}>
            {paper.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {paper.authors && paper.authors.length > 0 && (
          <p className={styles.authors}>
            <span className={styles.label}>作者：</span>
            {paper.authors.join(', ')}
          </p>
        )}
        <p className={styles.abstract}>{paper.abstract}</p>
        {showDetails && paper.image && (
          <div className={styles.imageWrapper}>
            <img src={paper.image} alt={paper.title} className={styles.image} />
          </div>
        )}
        {paper.link && (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={(e) => e.stopPropagation()}
          >
            查看论文 →
          </a>
        )}
      </div>
    </div>
  )

  if (showDetails) {
    return content
  }

  return <Link to={`/research/${paper.id}`} className={styles.cardLink}>{content}</Link>
}

export default ResearchCard