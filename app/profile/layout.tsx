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
      <div className={styles.container}>
        <NavbarComponent />
        <div className={styles.main}>
          <SidebarComponent />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
