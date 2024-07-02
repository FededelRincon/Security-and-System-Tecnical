import NavbarComponent from "../components/Navbar/Navbar";
import SidebarComponent from "../components/Sidebar/Sidebar";
import styles from "../profile/page.module.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.main}>
        <NavbarComponent />
      </div>

      <div className={styles.main}>
        <SidebarComponent />
      </div>

      {children}
    </>
  );
}
