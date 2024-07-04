import styles from "./Interests.module.css";

export default function InterestsComponent() {
  return (
    <>
      <div className={styles.InterestContainer}>
        <h5 className={styles.InterestText}>Intereses</h5>
        <div className={styles.badgeContainer}>
          <div className={styles.badge}>Fútbol</div>
          <div className={styles.badge}>Barcelona</div>
          <div className={styles.badge}>Paris</div>
          <div className={styles.badge}>Miami</div>
          <div className={styles.badge}>Selecion Argentina</div>
          <div className={styles.badge}>Pareja</div>
          <div className={styles.badge}>Hijos</div>
          <div className={styles.badge}>Mate</div>
          <div className={styles.badge}>Viajar</div>
        </div>
      </div>
    </>
  )
}
