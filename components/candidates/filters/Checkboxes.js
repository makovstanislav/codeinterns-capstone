'use client'
import { useRouter } from 'next/navigation';  
import styles from './filters.module.css';
import { useState } from 'react';

export default function Checkboxes({ searchParams }) {
    // convert current query (object data type) into URLSearchParams instance
    let params = new URLSearchParams(searchParams);

    const router = useRouter();

    // Create state for checkboxes
    const [checked, setChecked] = useState({
        engProfile: searchParams.engProfile === "on",
        relocation: searchParams.relocation === "on"
    });

    // navigate to URL updated with new queries 
    const onCheckboxChange = (name) => {
        setChecked(prevChecked => {
            const newChecked = { ...prevChecked, [name]: !prevChecked[name] };

            Object.keys(newChecked).forEach(key => {
                if (newChecked[key]) {
                    params.set(key, 'on');
                } else {
                    params.delete(key);
                }
            });

            const updQueryStr = params.toString();
            router.push('/candidates' + '?' + updQueryStr);

            return newChecked;
        });
    };

    return (
        <div>
            <div className={styles.checkboxContainer} onClick={() => onCheckboxChange('engProfile')}>
                <div className={styles.customCheckbox}>
                    {checked.engProfile && <div className={styles.checkmark}></div>}
                </div>
                <label className={styles.checkboxLabel} htmlFor='engProfileCheckbox'>English-language profiles</label>
            </div>
            <div className={styles.checkboxContainer} onClick={() => onCheckboxChange('relocation')}>
                <div className={styles.customCheckbox}>
                    {checked.relocation && <div className={styles.checkmark}></div>}
                </div>
                <span></span>
                <label className={styles.checkboxLabel} htmlFor='relocationCheckbox'>Open for relocation</label>
            </div>
        </div>
    );
}
