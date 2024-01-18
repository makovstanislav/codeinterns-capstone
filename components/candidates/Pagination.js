import styles from './pagination.module.css'
import { updatedQueryString } from '@/utils/updatedQueryString'

export default function Pagination({ pages, searchParams }) {
    const current = searchParams.page === undefined ? 1 : parseInt(searchParams.page)

    const result = () => {
        let result = []

        // left
        if (current - 1 < 7) {
            for (let page = 1; page <= current; page++) {
                result.push(<li className={`${page === 1 ? styles.pageFirst : styles.pageNo} ${page === current && styles.active}`}><a href={updatedQueryString(searchParams, 'page', page)}>{page}</a></li>)
            }
        } else {
            for (let page = 1; page <= 2; page++) {
                result.push(<li className={`${page === 1 ? styles.pageFirst : styles.pageNo} ${page === current && styles.active}`}><a href={updatedQueryString(searchParams, 'page', page)}>{page}</a></li>)
            }
            result.push( <li className={styles.periods}>...</li>)
            for (let page = current - 3; page <= current; page++) {
                result.push(<li className={`${ page === pages ? styles.pageNoLast : styles.pageNo} ${page === current && styles.active}`}><a href={updatedQueryString(searchParams, 'page', page)}>{page}</a></li>)
            }
        }

        // right
        if (pages - current < 7) {
            for (let page = current + 1; page <= pages; page++) {
                result.push(<li className={`${page === pages ? styles.pageNoLast : styles.pageNo} ${page === current && styles.active}`}><a href={updatedQueryString(searchParams, 'page', page)}>{page}</a></li>)
            }
        } else {
            for (let page = current + 1; page <= current + 3; page++) {
                result.push(<li className={`${styles.pageNo} ${page === current && styles.active}`}><a href={updatedQueryString(searchParams, 'page', page)}>{page}</a></li>)
            }
            result.push( <li className={styles.periods}>...</li>)
            for (let page = pages - 1; page <= pages; page++) {
                result.push(<li className={`${page === pages ? styles.pageNoLast : styles.pageNo} ${page === current && styles.active}`}><a href={updatedQueryString(searchParams, 'page', page)}>{page}</a></li>)
            }
        }

        return result
    }

    return (
        <div className={styles.paginationSection}>
            <ul className={styles.paginatedList}>
                <li className={`${styles.controlStart} ${current === 1 && styles.disabled}`}>
                    <a href={updatedQueryString(searchParams, 'page', current - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </a>
                </li>
                {result()}
                <li className={`${styles.controlEnd} ${current === pages && styles.disabled}`}>
                    <a href={updatedQueryString(searchParams, 'page', current + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0a69da" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}
