import HeaderComponent from "../components/Header/Header";
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
        <HeaderComponent />
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
