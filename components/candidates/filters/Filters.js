import styles from '../../../styles/candidates/filters.module.css'
import RangeInput from './RangeInput'
import Checkboxes from './Checkboxes'
import CloseButton from './CloseButton'
import { updatedQueryString } from '../../../utils/updatedQueryString'

export default function Filters({ searchParams }) {

    return (
        <section className={styles.filtersDesktop}>
            <div id='regionSection'>
                <div className={styles.filterHeadingContainer}>
                    <h4 className={styles.filterTitle}>Region</h4>
                    <CloseButton
                        searchParams={searchParams} 
                        queries={'region'}
                    />
                </div>
                <ul className={styles.list}>
                    {
                        [
                            {name: 'EU', query: 'Europe'}, 
                            {name: 'Africa', query: 'Africa'}, 
                            {name: 'Asia', query: 'Asia'}, 
                            {name: 'US', query: 'US'}
                        ].map((region) => (
                            <li key={region.query}>
                                <a 
                                    className={
                                        Object.keys(searchParams).includes('region') && 
                                        `?region=${region.query}`.toLowerCase().includes(searchParams.region.toLowerCase()) 
                                        ? styles.listItemActive : styles.listItem} 
                                    href={updatedQueryString(searchParams, 'region', region.query)} 
                                >
                                    {region.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div id='jobTitleSection'>
                <div className={styles.filterHeadingContainer}>
                    <h4 className={styles.filterTitle}>Job Title</h4>
                    <CloseButton
                        searchParams={searchParams} 
                        queries={'field'}
                    />
                </div>
                <p className={styles.filterSubtitle}>Development</p>
                <ul className={styles.list}>
                    {['JavaScript / Front-End', 'Java', 'C# / .NET', 'Python', 'PHP', 'Node.js', 'iOS', 'Android', 'C / C++ / Embedded', 'Flutter', 'Golang', 'Ruby', 'Scala', 'Salesforce', 'Rust', 'Other (tech)'].map((tech) => (
                        <li key={tech}>
                            <a 
                                className={Object.keys(searchParams).includes('field') && `?field=${tech}`.toLowerCase().includes(searchParams.field.toLowerCase()) ? styles.listItemActive : styles.listItem} 
                                href={updatedQueryString(searchParams, 'field', tech)} 
                            >
                                {tech}
                            </a>
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
                            <a 
                                className={Object.keys(searchParams).includes('field') && `?field=${job}`.toLowerCase().includes(searchParams.field.toLowerCase()) ? styles.listItemActive : styles.listItem} 
                                href={updatedQueryString(searchParams, 'field', job)}  
                            >
                                {job}
                            </a>
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
                            <a 
                                className={Object.keys(searchParams).includes('field') && `?field=${job}`.toLowerCase().includes(searchParams.field.toLowerCase()) ? styles.listItemActive : styles.listItem} 
                                href={updatedQueryString(searchParams, 'field', job)} 
                            >
                                {job}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <RangeInput 
                searchParams={searchParams}
                title={'Work experience'}
                queryFrom={'expFrom'}
                queryTo={'expTo'}
                max={10}
            />
            <RangeInput 
                searchParams={searchParams}
                title={'Salary expectations USD'}
                queryFrom={'salaryFrom'}
                queryTo={'salaryTo'}
                max={20000}
            />
           
            <div id='engLevelSection'>
                <div className={styles.filterHeadingContainer}>
                    <h4 className={styles.filterTitle}>English level</h4>
                    <CloseButton
                        searchParams={searchParams} 
                        queries={'englishLevel'}
                    />
                </div>
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
                            <a 
                                className={Object.keys(searchParams).includes('englishLevel') && `?englishLevel=${level}`.toLowerCase().includes(searchParams.englishLevel.toLowerCase()) ? styles.listItemActive : styles.listItem} 
                                href={updatedQueryString(searchParams, 'englishLevel', level)} 
                            >
                                {level}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='employmentTypeSection'>
                <div className={styles.filterHeadingContainer}>
                    <h4 className={styles.filterTitle}>Employment</h4>
                    <CloseButton
                        searchParams={searchParams} 
                        queries={'employment'}
                    />
                </div>
                <ul className={styles.list}>
                    {[
                        'Remote', 
                        'Full-time', 
                        'Part-time', 
                        'Freelance', 
                        'Relocate'
                    ].map((employment) => (
                        <li key={employment}>
                            <a 
                                className={Object.keys(searchParams).includes('employment') && `?employment=${employment}`.toLowerCase().includes(searchParams.employment.toLowerCase()) ? styles.listItemActive : styles.listItem} 
                                href={updatedQueryString(searchParams, 'employment', employment)} 
                            >
                                {employment}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='searchTypeSection'>
                <div className={styles.filterHeadingContainer}>
                    <h4 className={styles.filterTitle}>Search type</h4>
                    <CloseButton
                        searchParams={searchParams} 
                        queries={'searchType'}
                    />
                </div>
                <ul className={styles.list}>
                    {
                        ['Active search candidates', 'Passive search candidates'].map((searchType) => (
                            <li key={searchType}>
                                <a 
                                    className={
                                        Object.keys(searchParams).includes('searchType') && 
                                        `?searchType=${searchType}`.toLowerCase().includes(searchParams.searchType.toLowerCase()) 
                                        ? styles.listItemActive : styles.listItem} 
                                    href={updatedQueryString(searchParams, 'searchType', searchType)} 
                                >
                                    {searchType}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.extras}>
                <p className={styles.smallTitle}>Extras</p>
                <Checkboxes 
                    searchParams={searchParams}
                />
            </div>
        </section>
    )
}

