'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'
import styles from "../../../styles/candidates/filters.module.css"

export default function MobFiltersBtn({searchParams}) {

    const router = useRouter()

    // filters values
    const [filters, setFilters] = useState(searchParams)

    // collapse states
    const [isOpen, setIsOpen] = useState(false)
    const [jobIsOpen, setJobIsOpen] = useState(true)
    const [expIsOpen, setExpIsOpen] = useState(true)
    const [salaryIsOpen, setSalaryIsOpen] = useState(true)
    const [englishIsOpen, setEnglish] = useState(true)
    const [employmentIsOpen, setEmployment] = useState(true)
    const [searchTypeIsOpen, setSearchType] = useState(true)
    const [regionIsOpen, setRegion] = useState(true)
    const [resetActive, setResetActive] = useState(false)
    const [applyActive, setApplyActive] = useState(false)

    function toggleFilters() {
        setIsOpen(!isOpen)
        setApplyActive(false)
        setResetActive(false)
    }

    function toggleJob() {
        setJobIsOpen(!jobIsOpen)
    }

    function toggleExp() {
        setExpIsOpen(!expIsOpen)
    }

    function toggleSalary() {
        setSalaryIsOpen(!salaryIsOpen)
    }

    function toggleEnglish() {
        setEnglish(!englishIsOpen)
    }

    function toggleEmployment() {
        setEmployment(!employmentIsOpen);
    }
    
    function toggleSearchType() {
        setSearchType(!searchTypeIsOpen);
    }
    
    function toggleRegion() {
        setRegion(!regionIsOpen);
    }

    // filters handlers
    function onChange(e) {
        setFilters(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        setResetActive(false)
    }

    function onFilter(query, value) {
        if (query === 'expFrom' && value === 'use client') {
            // If "use client" is selected, set the value in filters.expFrom to "use client".
            setFilters(prev => ({
                ...prev,
                expFrom: 'use client'
            }));
        } else {
            // Otherwise, update filters.expFrom with the selected value.
            setFilters(prev => ({
                ...prev,
                [query]: value
            }));
        }
        setResetActive(false)
    }

    //submit
    function submit() {
        console.log(searchParams)
        let params = new URLSearchParams(filters)
        if (params.has('page')) {
            params.delete('page')
        }
        router.push("/candidates/?"+params.toString())
        toggleFilters()
        setApplyActive(!applyActive)
    }

    //reset
    function reset () {
        setFilters({})
        setResetActive(!resetActive)
    }

    const jobTitles = (
        <div className={styles.mobFilter}>
            <p className={styles.filterSubtitle}>Development</p>
                <ul className={styles.list}>
                    {['JavaScript / Front-End', 'Java', 'C# / .NET', 'Python', 'PHP', 'Node.js', 'iOS', 'Android', 'C / C++ / Embedded', 'Flutter', 'Golang', 'Ruby', 'Scala', 'Salesforce', 'Rust', 'Other (tech)'].map((tech) => (
                        <li key={tech}>
                            <span
                                onClick={()=> onFilter('field', tech)}
                            >
                                <p className={`${styles.listItem} ${filters.field == tech && styles.selected}`}>{tech}</p>
                            </span>
                        </li>
                    ))}
                </ul>
                <p className={styles.filterSubtitle}>Other (tech)</p>
                <ul className={styles.list}>
                    {[
                        'QA Manual', 
                        'QA Automation', 
                        'Design / UI/UX', 
                        '2D/3D Artist / Illustrator', 
                        'Project Manager', 
                        'Product Manager', 
                        'Architect / CTO', 
                        'DevOps', 
                        'Business Analyst', 
                        'Data Science', 
                        'Data Analyst', 
                        'Sysadmin', 
                        'Gamedev / Unity', 
                        'SQL / DBA', 
                        'Security', 
                        'Data Engineer', 
                        'Scrum Master / Agile Coach'
                    ].map((job) => (
                        <li key={job}>
                            <span 
                                
                                onClick={()=> onFilter('field', job)} 
                            >
                                <p className={`${styles.listItem} ${filters.field == job && styles.selected}`}>{job}</p>
                            </span>
                        </li>
                    ))}
                </ul>
                <p className={styles.filterSubtitle}>Other (non tech)</p>
                <ul className={styles.list}>
                    {[
                        'Marketing', 
                        'HR', 
                        'Recruiter', 
                        'Customer/Technical Support', 
                        'Sales', 
                        'SEO', 
                        'Technical Writing', 
                        'Lead Generation', 
                        'Other'
                    ].map((job) => (
                        <li key={job}>
                            <span 
                                onClick={()=> onFilter('field', job)}
                            >
                                <p className={`${styles.listItem} ${filters.field == job && styles.selected}`}>{job}</p>
                            </span>
                        </li>
                    ))}
                </ul>
        </div>
    )

    const workExperience = (
        <div className={styles.selectWrapper}>
            <select 
                className={styles.select} 
                name="expFrom" 
                defaultValue={filters.expFrom}
                onChange={(e) => onFilter('expFrom', e.target.value)}
            >
                <option value='notSelected'>does not matter</option>
                <option value='0'>none</option>
                <option value='0.5'>6 months</option>
                <option value='1'>1 year</option>
                <option value='1.5'>1.5 years</option>
                <option value='2'>2 years</option>
                <option value='2.5'>2.5 years</option>
                <option value='3'>3 years</option>
                <option value='4'>4 years</option>
                <option value='5'>5 years</option>
                <option value='6'>6 years</option>
                <option value='7'>7 years</option>
                <option value='8'>8 years</option>
                <option value='9'>9 years</option>
                <option value='10'>10 years</option>
            </select>
            <select 
                className={styles.select} 
                name="expTo" 
                defaultValue={filters.expTo}
                onChange={(e) => onFilter('expTo', e.target.value)}
            >
                <option value='notSelected'>does not matter</option>
                <option value='0'>none</option>
                <option value='0.5'>6 months</option>
                <option value='1'>1 year</option>
                <option value='1.5'>1.5 years</option>
                <option value='2'>2 years</option>
                <option value='2.5'>2.5 years</option>
                <option value='3'>3 years</option>
                <option value='4'>4 years</option>
                <option value='5'>5 years</option>
                <option value='6'>6 years</option>
                <option value='7'>7 years</option>
                <option value='8'>8 years</option>
                <option value='9'>9 years</option>
                <option value='10'>10 years</option>
            </select>
        </div>
    )

    const salary = (
        <div className={styles.salaryWrapper}>
            <input 
                type='number' 
                className={styles.salaryInputMob}
                name="salaryFrom"
                value={filters.salaryFrom} 
                onChange={onChange} 
                placeholder='$ from' 
                min='0'
            ></input>
            <input 
                type='number' 
                className={styles.salaryInputMob} 
                name="salaryTo"
                value={filters.salaryTo} 
                onChange={onChange} 
                placeholder='$ to' 
                min='0'
            ></input>
        </div>
    )

    const english = (
        <div className={styles.englishWrapper}>
            <ul className={styles.list}>
                {[
                    'No English', 
                    'Beginner/Elementary', 
                    'Pre-Intermediate', 
                    'Intermediate', 
                    'Upper-Intermediate', 
                    'Advanced/Fluent'
                ].map((level) => (
                    <li key={level}>
                        <p 
                            className={`${styles.listItem} ${filters.englishLevel == level && styles.selected}`}
                            onClick={()=> onFilter('englishLevel', level)}
                        >
                            {level}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )

    const employment = (
        <div className={styles.employmentWrapper}>
            <ul className={styles.list}>
                {[
                    'Remote', 
                    'Full-time', 
                    'Part-time', 
                    'Freelance', 
                    'Relocate'
                ].map((employment) => (
                    <li key={employment}>
                        <p 
                            className={`${styles.listItem} ${filters.employment == employment && styles.selected}`} 
                            onClick={()=> onFilter('employment', employment)}
                        >
                            {employment}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
    const searchType = (
        <div className={styles.searchTypeWrapper}>
            <ul className={styles.list}>
                {
                    ['Active search candidates', 'Passive search candidates'].map((searchType) => (
                        <li key={searchType}>
                            <span onClick={()=> onFilter('searchType', searchType)}>
                                <p  
                                    className={`${styles.listItem} ${filters.searchType == searchType && styles.selected}`} 
                                >
                                    {searchType}
                                </p>
                            </span>
                                
                        </li>
                    ))
                }
            </ul>
        </div>
    );
    
    const region = (
        <div className={styles.regionWrapper}>
            <ul className={styles.list}>
                {
                    [
                        {name: 'EU', query: 'Europe'}, 
                        {name: 'Africa', query: 'Africa'}, 
                        {name: 'Asia', query: 'Asia'}, 
                        {name: 'US', query: 'US'}
                    ].map((region) => (
                        <li key={region.query}>
                            <p 
                                className={`${styles.listItem} ${filters.region == region.query && styles.selected}`}
                                onClick={()=> onFilter('region', region.query)}  
                            >
                                {region.name}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
    
    const mobFiltersFooter = (
        <div className={styles.mobFiltersFooter}>
          <button className={`${styles.formBtn} ${resetActive && styles.resetActive}`} onClick={reset}>
            Reset
          </button>
          <button className={styles.btnApply} onClick={submit}>
            Apply
          </button>
        </div>
    )

    const mobFiltersSlider = (
        <div className={`${styles.mobFiltersSlider} ${isOpen ? styles.active : styles.passive}`}>
            <div className={styles.mobFiltersSliderHeader}>
                <div className={styles.mobFiltersSliderHeaderSmall}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-filter" viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <p>Filters</p>
                </div>
                <div className={styles.close} onClick={toggleFilters}></div>
            </div>
            <div className={styles.mobFiltersSliderBody}>
                <div className={styles.mobileFilterContainer}>
                    <div className={styles.mobFiltersHeading} onClick={toggleJob}>
                        {jobIsOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-up ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>  
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-down ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        }
                        Job title
                    </div>
                    {jobIsOpen && jobTitles}
                </div>
                <div className={styles.mobileFilterContainer}>
                    <div className={styles.mobFiltersHeading} onClick={toggleExp}>
                        {expIsOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-up ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>  
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-down ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        }
                        Work Experience
                    </div>
                    {expIsOpen && workExperience}
                </div>
                <div className={styles.mobileFilterContainer}>
                    <div className={styles.mobFiltersHeading} onClick={toggleSalary}>
                        {salaryIsOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-up ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>  
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-down ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        }
                        Salary Expectations
                    </div>
                    {salaryIsOpen && salary}
                </div>
                <div className={styles.mobileFilterContainer}>
                    <div className={styles.mobFiltersHeading} onClick={toggleEnglish}>
                        {englishIsOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-up ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>  
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-down ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        }
                        English level
                    </div>
                    {englishIsOpen && english}
                </div>
                <div className={styles.mobileFilterContainer}>
                    <div className={styles.mobFiltersHeading} onClick={toggleEmployment}>
                        {employmentIsOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-up ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>  
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-down ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        )}
                        Employment
                    </div>
                    {employmentIsOpen && employment}
                </div>
                <div className={styles.mobileFilterContainer}>
                    <div className={styles.mobFiltersHeading} onClick={toggleSearchType}>
                        {searchTypeIsOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-up ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>  
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-down ${styles.chevron}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        )}
                        Search Type
                    </div>
                    {searchTypeIsOpen && searchType}
                </div>
                <div className={styles.mobileFilterContainer}>
                <div className={styles.mobFiltersHeading} onClick={toggleRegion}>
                    {regionIsOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-up ${styles.chevron}`} viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>  
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`bi bi-chevron-down ${styles.chevron}`} viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    )}
                    Region
                </div>
                {regionIsOpen && region}
            </div>
            </div>
            {mobFiltersFooter}
        </div>
    )

    return (
        <div className={styles.mobFiltersBtnWrapper}>
            <button className={styles.toggleMobFiltersBtn} onClick={toggleFilters}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
                Filters
            </button>
            {mobFiltersSlider}
        </div>
    )
}
