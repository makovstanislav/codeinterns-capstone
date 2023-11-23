'use client'
import styles from "../../../styles/dashboard/header.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

function NavMenu() {
    const pathname = usePathname()
    const navItems = [
        'Inbox',
        'Candidates',
        'Jobs',
        'Salaries',
        'Guides'
    ]

    return (
        <div>
            <ul className={styles.navbar}>
                {navItems.map(item => <li className={`${pathname.toLowerCase().includes(item.toLowerCase()) ? styles.navbar_item_active : styles.navbar_item}`}><Link href='#'>{item}</Link></li> )}
            </ul>
        </div>
    )
}

export default NavMenu