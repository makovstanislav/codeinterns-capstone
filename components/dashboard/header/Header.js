'use client'
import { useState } from 'react'
import Image from "next/image"
import styles from "./header.module.css"
import AccountOptions from "./AccountOptions"
import NavMenu from "./NavMenu"

function Header({ menus }) {

  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isMobMenuOpen, setMobMenuOpen] = useState(false)

  function toggleAccOptions() {
    setIsAccountOpen(!isAccountOpen)
  }

  function toggleMobMenu() {
    setMobMenuOpen(!isMobMenuOpen)
    setIsAccountOpen(!isAccountOpen)
  }

  const burger = (
    <svg 
      className={`bi bi-list ${styles.mobTrigger}`} 
      onClick={toggleMobMenu} xmlns="http://www.w3.org/2000/svg" 
      width="30" 
      height="30" 
      fill="#bdbdbd" 
      viewBox="0 0 16 16"
    >
      <path 
        fill-rule="evenodd" 
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  )

  const menusContainer = (
    <div className={`${styles.menusWrapper} ${isMobMenuOpen ? styles.open : ""}`}>        
      <NavMenu />
      <div className={styles.myProfileContainer}>
        <a href="#">
          <Image
            src="/dashboard/nav/avatar.jpg"
            className={styles.avatar}
            alt="avatar"
            width={35}
            height={35}
          ></Image>
          <p>Stanislav Makov</p>
        </a>
      </div>
      <AccountOptions 
        toggle={toggleAccOptions} 
        isOpen={isAccountOpen} 
        setIsOpen={setIsAccountOpen} 
      />
    </div>
  )

  return (
    <div className={styles.header}>
      <div>
        {/* logo */}
        <a className={styles.logo} href='/'>
          <Image
            src="/assets/logo.png"
            className={styles.logo_img}
            width={108}
            height={14}
            alt="codeinterns"
          ></Image>
        </a>
        {/* burger */}
        {menus && burger}
      </div>
        {/* menus container */}
        {menus && menusContainer}
  </div>
  )
}

export default Header