import { auth } from "../../../firebaseAdmin"

export async function POST(request) {
    const { uid, role } = await request.json()
    const resClaim = await auth.setCustomUserClaims(uid, {role: role})
    
    // check custom claims
    /* const res = await auth.getUser(uid)
    console.log(res) */

    return new Response(JSON.stringify("Success"))
}