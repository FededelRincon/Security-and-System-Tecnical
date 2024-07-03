import styles from "./Sidebar.module.css";

export default function SidebarComponent() {
  return (
    <>
      <aside className={styles.sidebar}>
        <h3>Sidebar</h3>
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </aside>
    </>
  )
}
