import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/assets/logo_short.png"
        alt="logo"
        height={20}
        width={27}
      ></Image>
      <div className={styles.linksWrapper}>
        <a href="#" className={styles.link}>
          Privacy policy
        </a>
        <a href="#" className={styles.link}>
          Terms of use
        </a>
        <a href="#" className={styles.link}>
          Contact us
        </a>
      </div>
      <div className={styles.copyrightWrapper}>
        <a href="mailto:info@codeinterns.com" className={styles.link}>
          info@codeinterns.com
        </a>
        <p className={styles.link}>© 2023 CodeInterns.com</p>
      </div>
    </footer>
  )
}

export default Footer
