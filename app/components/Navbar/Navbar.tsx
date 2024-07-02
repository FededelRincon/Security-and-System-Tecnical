import Image from "next/image";
import styles from "../../profile/page.module.css";


export default function NavbarComponent() {
  return (
    <>
      <div>Navbar, desde Layout</div>

      {/* para el logo */}
               <Image
               src="../../../public/next.svg"
               alt="Vercel Logo"
               className={styles.vercelLogo}
               width={100}
               height={24}
               priority
             />
    </>
  )
}
