'use client'
import styles from './filters.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import CloseButton from './CloseButton'

export default function RangeInput({ searchParams, title, queryFrom, queryTo, max  }) {

    useEffect(()=> {
        setRange({
            [queryFrom]: searchParams[queryFrom] || '',
            [queryTo]: searchParams[queryTo] || ''
        })
    }, [])    

    const router = useRouter()
    const [range, setRange] = useState({
        [queryFrom]: searchParams.queryFrom,
        [queryTo]: searchParams.queryTo
    })

    // range handlers
    function onChange(e) {
        setRange(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function onSubmit(e) {
        e.preventDefault()

        // convert current query (object data type) into URLSearchParams instance
        let params = new URLSearchParams(searchParams)

        // update the current query with new one
        Object.entries(range).forEach(([key, value]) => {
            console.log(key, value)
            params.set(key, value) 
          });
        
        //navigate
        const updQueryStr = params.toString()
        router.push('/candidates' + '?' + updQueryStr)
    }

    return (
        <form className={styles.numberRange} onSubmit={onSubmit}>
            <div className={styles.rangeFilterHeadingContainer}>
                <p className={styles.smallTitle}>{title}</p>
                <CloseButton 
                    searchParams={searchParams}
                    queries={[queryFrom, queryTo]}
                />
            </div>
            <div className={styles.numberRangeMain}>
                <input 
                    type='number' 
                    className={styles.numberInput} 
                    name={queryFrom} 
                    value={range[queryFrom]} 
                    onChange={onChange} 
                    placeholder='From' 
                    min='0'
                ></input>
                <span className={styles.periods}>...</span>
                <input 
                    type='number' 
                    className={styles.numberInput} 
                    name={queryTo}
                    value={range[queryTo]} 
                    onChange={onChange} 
                    placeholder='To' 
                    max={max}
                ></input>
                <button 
                    type='submit' 
                    className={styles.submitRangeBtn}
                >
                    <Image 
                        src={'/dashboard/arrow-right.svg'} 
                        width={16} 
                        height={16} 
                        alt='submitRange'
                    />
                </button>
            </div>
        </form>
    )
}