import styles from '../../styles/candidates/card.module.css'
import Description from '../../components/candidates/Description'

function Card({ description, english, experience, publishedDateStr, region, salary, skills, title, views}) {
    
    function getPreviousDateStr(inputDate) {
        if (typeof inputDate === "string") {
            inputDate = new Date(inputDate)
        }
        const previous = new Date(inputDate.getTime())
        previous.setDate(inputDate.getDate() - 1)

        // returns e.g. 'Tue Jul 11 2023'
        return previous.toDateString()
    }

    let formattedPublicationTime = "someday"
    
    function setFormattedPublicationTime () {

        const publishedDate = new Date(publishedDateStr)
        const currentDate = new Date()
        const currentDateStr = currentDate.toISOString()

        // check if published today
        if (currentDateStr.slice(0, 10) === publishedDateStr.slice(0, 10)) {
            formattedPublicationTime = "today"
        } else if (getPreviousDateStr(currentDateStr) === publishedDate.toDateString()) {
        // check if published yesterday
            formattedPublicationTime = "yesterday"
        } else {
        // return a specific date e.g. '10 July'
            const options = {month: 'long', day: 'numeric'}
            const formattedDate = publishedDate.toLocaleDateString("en-GB", options)
            formattedPublicationTime = formattedDate
        }
    }

    setFormattedPublicationTime()

    return (
        <div className={styles.card}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <a className={styles.title} href='#'>{title}</a>
                    <div className={styles.essentials}>
                        <span className={styles.essentialsItem}>{region} · </span>
                        <span className={styles.essentialsItem}>{experience} years of experience · </span>
                        <span className={styles.essentialsItem}>{english} · </span>
                        <span className={styles.essentialsItem}>Published {formattedPublicationTime}</span>
                    </div>
                    <p className={styles.salaryMo}>${salary} / mo</p>
                    <p className={styles.salaryYear}>≈ ${salary * 12} / year net</p>
                </div>
                <Description description={description}/>
                <div className={styles.skillsGroup}>
                    {Object.keys(skills).map(skill => (
                        <div className={styles.skillContainer}>{skills[skill]}</div>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.actionButtonsGroup}>
                    <a href='#' className={styles.actionButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        </svg>
                        <p>Contact</p>
                    </a>
                    <a href='#' className={styles.actionButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                        <p>Save</p>
                    </a>
                </div>
                <div className={styles.viewsContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#757575" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                    <p>{views}</p>
                </div>
            </div>
        </div>
    )
}

export default Card