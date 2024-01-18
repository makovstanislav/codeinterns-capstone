import styles from './filters.module.css'

function CloseButton({ searchParams, queries }) {

  const strippedQueryString = () => {
    let params = new URLSearchParams(searchParams)
    if (Array.isArray(queries)) {
      queries.forEach((query) => params.delete(query));
    } else {
      params.delete(queries);
    }
    return params.toString()
  }

  const isVisible = () => {
    if (Array.isArray(queries)) {
      return queries.some(query => Object.keys(searchParams).includes(query)) ? 'block' : 'none'
    } else {
      return Object.keys(searchParams).includes(queries) ? 'block' : 'none'
    }
  }


  return (
    <div>
        <a 
          className={styles.remove} 
          style={{ display: isVisible()}}
          href={`candidates?${strippedQueryString()}`}
        >×</a>
    </div>
  )
}

export default CloseButton
