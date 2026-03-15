import styles from './EducationCard.module.css'

function EducationCard({ school }) {
  return (
    <div className={styles.card}>
      {/* 第一行：大学名 + 就读时间 */}
      <div className={styles.header}>
        <div className={styles.nameWrapper}>
          <h3 className={styles.name}>{school.name}</h3>
          {school.nameEn && <span className={styles.nameEn}>{school.nameEn}</span>}
        </div>
        <span className={styles.period}>{school.period}</span>
      </div>
      {/* 第二行：学历 / 专业 / GPA */}
      <div className={styles.info}>
        <span className={styles.degree}>{school.degree}</span>
        <span className={styles.separator}>·</span>
        <span className={styles.major}>{school.major}</span>
        {school.gpa && (
          <>
            <span className={styles.separator}>·</span>
            <span className={styles.gpa}>GPA: {school.gpa}</span>
          </>
        )}
      </div>
      {/* 第三行：荣誉奖项 */}
      {school.honors && school.honors.length > 0 && (
        <div className={styles.row}>
          <span className={styles.label}>荣誉：</span>
          <div className={styles.tags}>
            {school.honors.map((honor, index) => (
              <span key={index} className={styles.tag}>
                {honor}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* 第四行：核心课程 */}
      {school.courses && school.courses.length > 0 && (
        <div className={styles.row}>
          <span className={styles.label}>课程：</span>
          <div className={styles.tags}>
            {school.courses.map((course, index) => (
              <span key={index} className={styles.tag}>
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EducationCard