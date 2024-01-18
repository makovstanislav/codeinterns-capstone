import Header from "@/components/dashboard/header/Header"
import Footer from "@/components/dashboard/Footer"
import styles from "./layout.module.css"
import "../../app/globals.css"

export default function DashboardLayout({ children }) {
  return(
    <div className={styles.layout}>
      <Header menus={true}/>
      {children}
      <Footer/>
    </div>
  )
}


