import { db } from "../../../firebaseAdmin"
import { NextResponse } from "next/server"

export async function GET(req) {

    // e.g. URLSearchParams { 'keywords' => 'junior', 'option' => '' }
    const searchParams = new URL(req.url).searchParams
    
    // get URL params
    const page =  searchParams.get('page') === null ? 1 : parseInt(searchParams.get('page'))
    const keywords = searchParams.get('keywords')
    const option = searchParams.get('option')
    const expFrom = searchParams.get('expFrom')
    const expTo = searchParams.get('expTo')
    const salaryFrom = searchParams.get('salaryFrom')
    const salaryTo = searchParams.get('salaryTo')
    const region = searchParams.get('region')
    const field = searchParams.get('field')
    const englishLevel = searchParams.get('englishLevel')
    const employment = searchParams.get('employment')
    const searchType = searchParams.get('searchType')
    const engProfile = searchParams.get('engProfile')
    const relocation = searchParams.get('relocation')

    // set database query
    const candidatesRef = db.ref('candidates')

    // get all published candidates. Data type: snapshot => arr
    const snapshot = await candidatesRef.once('value')
    const allCandidatesObj = snapshot.val()
    let allCandidatesArr = Object.keys(allCandidatesObj).map((key) => {
        return { ...allCandidatesObj[key] };
    })

    // filter by expFrom
    if (expFrom) {
        const result = allCandidatesArr.filter(candidate => candidate.Experience >= expFrom)
        allCandidatesArr = result
    }

    // filter by expTo
    if (expTo) {
        const result = allCandidatesArr.filter(candidate => candidate.Experience <= expTo)
        allCandidatesArr = result
    }

    // filter by salaryFrom
    if (salaryFrom) {
        const result = allCandidatesArr.filter(candidate => candidate.Salary >= salaryFrom)
        allCandidatesArr = result
    }

    // filter by salaryTo
    if (salaryTo) {
        const result = allCandidatesArr.filter(candidate => candidate.Salary <= salaryTo)
        allCandidatesArr = result
    }

    // filter by region
    if (region) {
        const result = allCandidatesArr.filter(candidate => candidate.Region === region)
        allCandidatesArr = result
    }

    // filter by field (2nd time)
    if (field) {
        // Normalize and split the field into keywords/phrases
        const fieldKeywords = field.toLowerCase().split(/[\s\/,]+/);
    
        const result = allCandidatesArr.filter(candidate => {
            const title = candidate.Title.toLowerCase();
            const description = (candidate.Description || '').toLowerCase();
            return fieldKeywords.some(keyword => 
                title.includes(keyword) || description.includes(keyword)
            );
        });
        allCandidatesArr = result;
    }

    // filter by eng
    if (englishLevel) {
        const result = allCandidatesArr.filter(candidate => candidate.English === englishLevel)
        allCandidatesArr = result
    }

    // filter by employment
    if (employment) {
        const result = allCandidatesArr.filter(candidate => candidate.Employment === employment)
        allCandidatesArr = result
    }

    // filter by searchType
    if (searchType) {
        const result = allCandidatesArr.filter(candidate => candidate.searchType === searchType)
        allCandidatesArr = result
    }

    // filter by engProfile
    if (engProfile) {
        const result = allCandidatesArr.filter(candidate => candidate.engProfile === engProfile)
        allCandidatesArr = result
    }

    // filter by relocation
    if (relocation) {
        const result = allCandidatesArr.filter(candidate => candidate.Relocation === relocation)
        allCandidatesArr = result
    }

    // filter nodes containing the keywords
    // to refactor 
    if (keywords) {
        let filteredCandidatesArr = []
        let keywordsArray = keywords.toLowerCase().split(/[\s,;]+/);

        allCandidatesArr.forEach(node => {
            let nodeTexts = [
                (node['title'] || '').toLowerCase(),
                (node['employment'] || '').toLowerCase(),
                (node['region'] || '').toLowerCase(),
                ...(node['skills'] || []).map(skill => skill.toLowerCase())
            ]   

            // filter by keywords (searchbar input)
            if (option === 'titleOnly') {
                // title-only search 
                if (keywordsArray.every(keyword => node.Title.toLowerCase().includes(keyword))) {
                    filteredCandidatesArr.push(node);
                }
            } else if (option === 'fullText') {
                // full-text search
                if (keywordsArray.every(keyword => node.Description.toLowerCase().includes(keyword))) {
                    filteredCandidatesArr.push(node);
                }
            } else {
                // is every keyword included in the fields
                if (keywordsArray.every(keyword => nodeTexts.some(text => text.toLowerCase().includes(keyword)))) {
                    // basic search
                    filteredCandidatesArr.push(node);
                }
            } 
        })

        allCandidatesArr = filteredCandidatesArr
    }

    const totalPages = Math.ceil(allCandidatesArr.length / 10)
    
    // get profiles for a page
    const profiles = () => {
        const startIndex = (page - 1) * 10;
        const endIndex = startIndex + 10;

        return allCandidatesArr.slice(startIndex, endIndex);
    }    

    const result = {
        totalPages: totalPages,
        profiles: profiles(),
        profilesNum: allCandidatesArr.length
    }

    console.log(result)
    
    return NextResponse.json(result)
}
