import styles from "../../../styles/candidates/candidates.module.css"
import Card from "@/components/candidates/Card"
import Filters from "../../../components/candidates/filters/Filters"
import MobFilters from "@/components/candidates/filters/MobFilters"
import Searchbar from "@/components/candidates/Searchbar"
import Pagination from "@/components/candidates/Pagination"

async function get10Candidates(searchParams) {
  // get all params as a string and pass to api
  const paramsStr = new URLSearchParams(searchParams).toString()

  //pass to api
  // Ensure the base URL includes the protocol
  const baseUrl = 'http://localhost:3000'
  
  const res = await fetch(`${baseUrl}/api/candidates?${paramsStr}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function CandidatesPage({ searchParams }) {
  const candidates = await get10Candidates(searchParams)

  return (
    <div>
      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1 className={styles.pageTitle}>Candidates</h1>
          <h1 className={styles.candidatesQty}>{candidates.profilesNum}</h1>
        </section>
        <section className={styles.tabsSection}>
          <div className={styles.tabActive}>All</div>
          <div className={styles.tab}>Saved</div>
        </section>
        <div className={styles.mainSection}>
          <Filters searchParams={searchParams} />
          <div className={styles.searchAndFeed}>
            <Searchbar
              keywords={searchParams.keywords || ""}
              searchOption={searchParams.option || "basic"}
            />
            <div className={styles.feed}>
              {candidates.profiles.map((candidate) => {
                return (
                  <Card
                    description={candidate.Description}
                    english={candidate.English}
                    experience={candidate.Experience}
                    publishedDateStr={candidate.Published}
                    region={candidate.Region}
                    salary={candidate.Salary}
                    skills={candidate.Skills}
                    title={candidate.Title}
                    views={candidate.Views}
                  />
                )
              })}
            </div>
            {candidates.totalPages > 1 && (
              <Pagination
                pages={candidates.totalPages}
                searchParams={searchParams}
              />
            )}
          </div>
        </div>
      </main>
      <MobFilters searchParams={searchParams}/>
    </div>
  )
}
