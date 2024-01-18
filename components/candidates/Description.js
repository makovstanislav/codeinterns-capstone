'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './card.module.css';

export default function ReadMore({ description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const descriptionRef = useRef(null);

  // Calculate the number of rows when the component mounts or when the description changes
  useEffect(() => {
    if (descriptionRef.current) {
      const descriptionElement = descriptionRef.current;
      const lineHeight = parseFloat(window.getComputedStyle(descriptionElement).lineHeight);
      const contentHeight = descriptionElement.clientHeight;
      const computedRowCount = Math.round(contentHeight / lineHeight);
      setRowCount(computedRowCount);
    }
  }, [description]);

  function expand() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div
        ref={descriptionRef}
        className={`${styles.description} ${isOpen && styles.descOpen}`}
      >
        {description}
      </div>
      {(!isOpen && rowCount >= 10) && (
        <div 
          className={styles.readMore} 
          onClick={expand}
        >
          Read more
        </div>
      )}
    </div>
  )
}


