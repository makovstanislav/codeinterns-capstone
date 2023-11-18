const updatedQueryString = (searchParams, query, param) => {
    let params = new URLSearchParams(searchParams)
    if (params.has('page') && query !== 'page') {
        params.delete('page')
    }

    params.set(query, param)
    return '?' + params.toString()
}

export { updatedQueryString }
