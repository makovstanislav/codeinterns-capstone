import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Carousel from "@/components/landing/Carousel";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <a href="/">
          <Image
            className={styles.logo}
            src="/assets/logo.png"
            width={108}
            height={14}
          ></Image>
        </a>
        <Link className={styles.signIn} href="/transfer">
          Sign In
        </Link>
      </div>
      <div className={styles.intro}>
        <h1>
          Find your first job in IT
        </h1>
        <h3>
          For all ages and levels of proficiency. Direct access to companies
          globally.
        </h3>
        <div className={styles.introBtns}>
          <Link className={`${styles.btn} ${styles.btnHire}`} href="/transfer">
             Recruit 
          </Link>
          <Link className={`${styles.btn} ${styles.btnFind}`} href="/transfer">
            Find job
          </Link>
        </div>
        <Image
          className={styles.mainImg}
          src={"/landing/internship.jpg"}
          width={968}
          height={585}
        ></Image>
      </div>

      <div className={styles.companiesSection}>
        <p className={styles.companiesSectionTitle}>
          LEADERS EMPLOY VIA CODEINTERNS
        </p>
        <ul className={styles.employmentCards}>
          <li className={styles.employment}>
            <Image
              src={"/landing/technozenith.png"}
              height={86}
              width={86}
            ></Image>
            <p className={styles.employer}>TechnoZenith hired</p>
            <p className={styles.role}>Jr. Data Engineer</p>
          </li>
          <li className={styles.employment}>
            <Image
              src={"/landing/quantileaf.png"}
              height={86}
              width={86}
            ></Image>
            <p className={styles.employer}>Quantileaf hired</p>
            <p className={styles.role}>Sr. iOS Developer</p>
          </li>
          <li className={styles.employment}>
            <Image
              src={"/landing/codenimbus.png"}
              height={86}
              width={86}
            ></Image>
            <p className={styles.employer}>CodeNimbus hired</p>
            <p className={styles.role}>Sr. Scala Developer</p>
          </li>
          <li className={styles.employment}>
            <Image
              src={"/landing/cyberpulse.png"}
              height={86}
              width={86}
            ></Image>
            <p className={styles.employer}>CyberPulse hired</p>
            <p className={styles.role}>Sr. Product Designer</p>
          </li>
          <li className={styles.employment}>
            <Image
              src={"/landing/infra.png"}
              height={86}
              width={86}
            ></Image>
            <p className={styles.employer}>Infra hired</p>
            <p className={styles.role}>QA Automation Engineer</p>
          </li>
        </ul>
      </div>

      <div className={styles.ciFor}>
        <p className={styles.ciForSubtitle}>Codeinterns for scouting</p>
        <h2 className={styles.ciForTitle}>
          <span>Browse a wide variety of candidates </span>
        </h2>
        <Link className={`${styles.btn} ${styles.btnFind}`} href="/transfer">
          Recruit
        </Link>
        <Image
          className={styles.ciForImg}
          src={"/landing/hiring.jpg"}
          width={970}
          height={400}
        ></Image>
        <ul className={styles.benefits}>
          <li className={styles.benefitsItem}>
            <Image
              src="/landing/emoji/budget.png"
              width={40}
              height={40}
            ></Image>
            <div className={styles.benefitsItemTitle}>
              Optimize recruitment budget
            </div>
            <div className={styles.benefitsItemDescr}>
              Utilize our platform to reach a global talent pool, often
              resulting in cost savings.
            </div>
          </li>
          <li className={styles.benefitsItem}>
            <Image
              src="/landing/emoji/handshake.png"
              width={40}
              height={40}
            ></Image>
            <div className={styles.benefitsItemTitle}>
              Interact with prospective hires
            </div>
            <div className={styles.benefitsItemDescr}>
              CodeInterns serves as a conduit, not an agency, allowing you to
              hire as per your preference.
            </div>
          </li>
          <li className={styles.benefitsItem}>
            <Image src="/landing/emoji/user.png" width={40} height={40}></Image>
            <div className={styles.benefitsItemTitle}>
              Gain comprehensive profiles
            </div>
            <div className={styles.benefitsItemDescr}>
              Our platform provides thorough profiles of all candidates,
              assisting your selection process.
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.ciFor}>
        <p className={styles.ciForSubtitle}>Codeinterns for internship</p>
        <h2 className={styles.ciForTitle}>
          <span>Discover jobs that fit you.</span>
          <span> Globally & seamlessly</span>
        </h2>
        <Link className={`${styles.btn} ${styles.btnFind}`} href="/transfer">
          Find internship
        </Link>
        <Image
          className={styles.ciForImg}
          src={"/landing/main.jpg"}
          width={970}
          height={400}
        ></Image>
        <ul className={styles.benefits}>
          <li className={styles.benefitsItem}>
            <Image
              src="/landing/emoji/privacy.png"
              width={40}
              height={40}
            ></Image>
            <div className={styles.benefitsItemTitle}>Maintain privacy</div>
            <div className={styles.benefitsItemDescr}>
              Your contacts stay hidden until you decide <br></br> to share them
              with prospective employers.
            </div>
          </li>
          <li className={styles.benefitsItem}>
            <Image
              src="/landing/emoji/freelancer.png"
              width={40}
              height={40}
            ></Image>
            <div className={styles.benefitsItemTitle}>
              Discover diverse job options
            </div>
            <div className={styles.benefitsItemDescr}>
              Engage with organizations offering full-time, part-time, remote,
              and hybrid work opportunities.
            </div>
          </li>
          <li className={styles.benefitsItem}>
            <Image src="/landing/emoji/team.png" width={40} height={40}></Image>
            <div className={styles.benefitsItemTitle}>
              Engage with agile teams
            </div>
            <div className={styles.benefitsItemDescr}>
              Connect with a multitude of startups and established product
              companies seeking skilled professionals.
            </div>
          </li>
        </ul>
      </div>

      <Carousel />

      <div className={styles.intro}>
        <h1>
          Find your first job in IT
        </h1>
        <h3>
          For all ages and levels of proficiency. Direct access to companies
          globally.
        </h3>
        <div className={styles.introBtns}>
          <Link className={`${styles.btn} ${styles.btnHire}`} href="/transfer">
            Recruit
          </Link>
          <Link className={`${styles.btn} ${styles.btnFind}`} href="/transfer">
            Find jobs
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
