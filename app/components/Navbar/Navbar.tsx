import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../public/next.svg"


export default function NavbarComponent() {
  return (
    <>
      <div className={styles.example}>
        Navbar
      </div>

      {/* para el logo */}
               <Image
               src={logo}
               alt="Vercel Logo"
               className={styles.vercelLogo}
               width={100}
               height={24}
               priority  
             />
    </>
  )
}
