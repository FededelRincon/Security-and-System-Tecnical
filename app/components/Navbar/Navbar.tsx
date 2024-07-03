import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../public/next.svg"


export default function NavbarComponent() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <ul className={styles.navLinks}>
          <li>Inicio</li>
          <li>Noticias</li>
          <li>Contacto</li>
        </ul>
        <div className={styles.profile}>Mi Perfil</div>
      </nav>

      {/* para el logo */}
    {/* <Image
        src={logo}
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority  
      /> */}
    </>
  )
}
