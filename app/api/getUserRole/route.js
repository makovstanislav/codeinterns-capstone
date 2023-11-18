import { auth } from "../../../firebaseAdmin"

export async function GET(request) {
    const uid = request.headers.get('uid')
    const userRecord = await auth.getUser(uid)
    const role = await userRecord.customClaims.role 

    // check custom claims
    // console.log(role)

    const data = {
        role: role
    }

    return Response.json({data})
}