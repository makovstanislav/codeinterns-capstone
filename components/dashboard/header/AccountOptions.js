import { useRef, useEffect } from 'react'
import Image from "next/image"
import styles from "./header.module.css"

export default function AccountOptions({ toggle, isOpen, setIsOpen }) {
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    const options = (
        <ul className={styles.optionsList}>
            <li><a className={styles.option} href='#'>My profile</a></li>
            <li><a className={styles.option} href='#'>Settings</a></li>
            <hr></hr>
            <li><a className={styles.option} href='/'>Logout</a></li>
        </ul>
    )

    return (
        <div className={styles.togglerDesktop} ref={ref}>
            <div className={styles.caret_container} onClick={toggle}>
                <Image 
                    src='/dashboard/nav/caret-down-fill.svg'
                    width={10}
                    height={10}
                    alt='caret'
                >
                </Image>
            </div>
            {isOpen && options}
        </div> 
    )
}
