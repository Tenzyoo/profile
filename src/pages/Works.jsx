import WorkCard from '../components/WorkCard'
import works from '../data/works.json'
import styles from './Works.module.css'

function Works() {
  return (
    <div className={styles.works}>
      <h1 className={styles.pageTitle}>个人作品</h1>
      <p className={styles.pageDescription}>
        这里展示了我创建的一些开源项目、工具和资源。
      </p>
      <div className={styles.grid}>
        {works.works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}

export default Works