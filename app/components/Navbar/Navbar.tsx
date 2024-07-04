import Image from "next/image";
import styles from "./Navbar.module.css";
import profilePic from "../../../public/messi.jpg"


export default function NavbarComponent() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <h4 className={styles.profileName}>Lionel Messi</h4>
        <div className={styles.picContainer}>
          <Image
            src={ profilePic }
            alt="Profile Picture"
            className={styles.picture}
            width={100}
            height={25}
            priority  
          />
        </div>
      </nav>
    </>
  )
}
