import { db } from "../../../firebaseAdmin"

export async function POST() {
    const candidatesRef = db.ref('candidates').push()
        
    candidatesRef.set({
        Description: "Currently I'm working for a world-leading provider of telecom equipment, solutions and services to mobile and fixed network operators and telecom providers all over the world. We are developing Enterprise Cloud Orchestratration product, focused on Digital services in telco area. • Review of new features requirements and implementation of new solution features • Support an old functionality, bugfix • Self-testing of developed features (Automation, unit tests) • Provide demo sessions for developed functionality. typescript Senior.",  
        Employment: "Remote",  
        English: "C2",
        engProfile: "",  
        Experience: 9,  
        Published: new Date().toISOString(),  
        Region: "US",
        Relocation: "on",  
        Salary: 5000,  
        Skills: ['Flutter', 'JavaScript', 'CSS'],  
        Title: "Flutter",  
        Views: "13",  
        searchType: "Active"  
    })
}