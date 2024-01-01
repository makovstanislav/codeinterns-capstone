'use client'
import styles from '../../styles/candidates/searchbar.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Searchbar({ keywords, searchOption}) {
    const [input, setInput] = useState(keywords)
    const [option, setOption] = useState('')
    const router = useRouter()

    useEffect(()=> {
        setOption(searchOption)
    }, [])

    function handleSearchChange(e) {
        setInput(prev => e.target.value)
    }

    async function handleOptionChange(e) {
        setOption(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        router.push(`/candidates?keywords=${input}&option=${option}`)
    }

    return (
        <section className={styles.sectionWrapper}>
            <form className={styles.searchContainer} onSubmit={submitHandler}>
                <input 
                    type='search' 
                    className={styles.searchbar} 
                    placeholder='e.g. python junior amsterdam' 
                    onChange={handleSearchChange}
                    value={input}
                ></input>
                <button type='submit' className={styles.searchButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </form>
            <div className={styles.radioButtonsGroup}>
                <div className={styles.radio}>
                    <label htmlFor="radio1" className={styles.radioLabel}>General search</label>
                    <input 
                        type='radio' 
                        id="radio1" 
                        className={styles.radioButton} 
                        name="searchType" 
                        value="basic" 
                        onChange={handleOptionChange} 
                        checked={option === 'basic'} 
                    />
                    <span></span>
                </div>
                <div className={styles.radio}>
                    <label htmlFor="radio2" className={styles.radioLabel}>By content</label>
                    <input 
                        type='radio' 
                        id="radio2" 
                        className={styles.radioButton} 
                        name="searchType" 
                        value="fullText" 
                        onChange={handleOptionChange} 
                        checked={option === 'fullText'} 
                    />
                    <span></span>
                </div>
                <div className={styles.radio}>
                    <label htmlFor="radio3" className={styles.radioLabel}>By title</label>
                    <input 
                        type='radio' 
                        id="radio3" 
                        className={styles.radioButton} 
                        name="searchType" 
                        value="titleOnly" 
                        onChange={handleOptionChange} 
                        checked={option === 'titleOnly'} 
                    />
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default Searchbar

