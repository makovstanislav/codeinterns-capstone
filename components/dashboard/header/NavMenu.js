'use client'
import styles from "./header.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

function NavMenu() {
    const pathname = usePathname()
    const navItems = [
        'Messaging',
        'Candidates',
        'Vacancies',
        'Pay Rates',
        'Tutorial'
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